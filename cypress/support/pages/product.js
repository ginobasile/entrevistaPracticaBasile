class ProductPage {
    constructor(){
        this.buttonCuotas = '#open-installments-modal';
        this.bankSelector = '#bankSelector';
        this.cardSelector = '#inputCard';
        this.buttonConfirm = '#calculate_btn';
        this.tableCuotas = '#bodyTable';
        this.productList = '.products > ol > li.product-item';
        this.productTitle = '.page-title';
        this.addProductButton = '#swatch_attribute_card';
        this.moreBuyButton = '.btn-secondary'
    }
    selectProduct(product){
        cy.get(product).click({force: true});
    }

    selectCuotas(){
        cy.get(this.buttonCuotas).click();
    }
    
    selectBank(bName){
        cy.get(this.bankSelector).click();
        cy.contains(bName).click({force: true});
    }

    selectCard(cName){
        cy.get(this.cardSelector).click();
        cy.contains(cName).click({force: true});
    }

    calculateCuotas(){
        cy.get(this.buttonConfirm).click();
    }

    selectProductForNumberOrder(number) {
        cy.get(this.productList).eq(number).scrollIntoView().find('a').should('be.visible').click();
    }

    addProduct(){
        cy.get(this.addProductButton).click();
    }

    moreBuy(){
        cy.get(this.moreBuyButton).click();
    }






}

export default new ProductPage();