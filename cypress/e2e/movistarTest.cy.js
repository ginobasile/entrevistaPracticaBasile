import SearchPage from '../support/pages/search';
import ProductPage from '../support/pages/product'
import product from '../support/pages/product';
describe('Validar cuotas y filtros en la web de Movistar', ()=>{
    beforeEach(() => {
        cy.visit('https://tiendaonline.movistar.com.ar')
    });


    it('CP001-Validar cuotas(3) en equipo(A14)', ()=>{
        SearchPage.searchProduct('A14');
        ProductPage.selectProduct('ol > [data-id="18583"] > a > .product-image > img')
        ProductPage.selectCuotas();
        ProductPage.selectBank('Banco Hipotecario');
        ProductPage.selectCard('Visa');
        ProductPage.calculateCuotas();
        ProductPage.verifyCuotas();
    });





});