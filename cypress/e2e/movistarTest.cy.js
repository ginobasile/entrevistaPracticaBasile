import SearchPage from '../support/pages/search';
import ProductPage from '../support/pages/product'
import FilterPage from '../support/pages/filter'

describe('Validar cuotas y filtros en la web de Movistar', ()=>{
    beforeEach(() => {
        cy.visit('https://tiendaonline.movistar.com.ar')
    });


    it('CP001-Validar cuotas(3) en equipo(A14)', ()=>{
        SearchPage.searchProduct('A14');
        ProductPage.selectProduct('ol > [data-id="18583"] > a > .product-image > img')
        cy.url().should('include', 'samsung-galaxy-a15-4g.html');
        ProductPage.selectCuotas();
        ProductPage.selectBank('Banco Hipotecario');
        ProductPage.selectCard('Visa');
        ProductPage.calculateCuotas();

        cy.get('#bodyTable').within(() => {
            cy.get('tr').should('contain', '3 cuotas')
        });

        //cy.screenshot('Contiene 3 cuotas');
        
    });

    it('CP002-Aplicar filtro de equipos', ()=>{
        cy.viewport(1280,720);
        FilterPage.buttonFilterVisible();
        FilterPage.memoryFilter(128);
        FilterPage.buttonFilterVisible();
        FilterPage.priceFilter('$ 300.000 - $ 600.000');
            cy.wait(2000);
        FilterPage.filterProductsCant().then((count) =>{
            cy.log('${count}')
            FilterPage.productsDisplayTotal().then((totalCount)=>{
                cy.log('${totalCount}')
                expect(count).to.equal(totalCount);
            })
        })
        cy.screenshot('Productos Filtrados (128gb) y ($300.000-$600.000)');
        
    });


    it('CP-003- Validar cuotas 3er equipo(60c)', ()=>{
        ProductPage.selectProductForNumberOrder(2);
        ProductPage.selectCuotas();
        ProductPage.selectBank('Credicoop');
        ProductPage.selectCard('Visa');
        ProductPage.calculateCuotas();

        cy.get('#bodyTable').within(() => {
            cy.get('tr').contains('60 cuotas').should('not.exist');
        });
        cy.screenshot('No existe la opcion 60 cuotas');
     
    });

    it('CP-004- Verificar cantidad maxima carrito de compras(3 productos)', ()=>{
        ProductPage.selectProductForNumberOrder(3);
        ProductPage.addProduct();
        ProductPage.moreBuy();

        ProductPage.selectProductForNumberOrder(4);
        ProductPage.addProduct();
        ProductPage.moreBuy();

        ProductPage.selectProductForNumberOrder(5);
        ProductPage.addProduct();
        
        cy.get('#amountlimit', {timeout:5000}).should('be.visible').find('.content .info').should('be.visible').and('contain','Alcanzaste el máximo de 3 productos en tu carrito.') 
        cy.screenshot('Mensaje en pantalla que se alcanzo limite de productos en carro');

            

    })



});