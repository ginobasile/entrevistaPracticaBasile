class ProductPage {
    constructor(){
        this.buttonCuotas = '#open-installments-modal';
        this.bankSelector = '#bankSelector';
        this.cardSelector = '#inputCard';
        this.buttonConfirm = '#calculate_btn';
        this.feeList = '#bodyTable';
    }
    selectProduct(product){
        cy.get(product).click();
    }

    selectCuotas(){
        cy.get(this.buttonCuotas).click();
    }
    
    selectBank(bName){
        cy.get(this.bankSelector).click();
        cy.contains(bName).click();
    }

    selectCard(cName){
        cy.get(this.cardSelector).click();
        cy.contains(cName).click()
    }

    calculateCuotas(){
        cy.get(this.buttonConfirm).click();
    }

    verifyCuotas(){
        cy.get(this.feeList).within(() => {
            cy.get('tr').should('contain', '3 cuotas')
        });
    }
}

export default new ProductPage();