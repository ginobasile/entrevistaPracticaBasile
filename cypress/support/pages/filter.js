class FilterPage{
    constructor(){
        this.buttonFilter = '.block-subtitle';
        this.memory = '.memory > .filter-title';
        this.price = '.price';  
        this.filterProductList = '.products > ol .product-item:visible';
        this.displayNumberProduct = '.total-products > p';
    }

    buttonFilterVisible(){
        cy.get(this.buttonFilter).then(($btn) => {
            if($btn.is(':visible')){
                cy.wrap($btn).click();
            }
        });
    }
    memoryFilter(memoryValue){
        cy.get(this.memory).click();
        cy.contains(memoryValue).click();
    }
    priceFilter(priceValue){
     
        cy.contains(priceValue).click();
    }

    filterProductsCant(){
      return  cy.get(this.filterProductList).its('length');
    }

    productsDisplayTotal(){
            return cy.get(this.displayNumberProduct).invoke('text').then((text) => {
                const totalProductsFilter = parseInt(text.match(/\d+/)[0]);
                return totalProductsFilter;
            });

    }
    
}

export default new FilterPage();