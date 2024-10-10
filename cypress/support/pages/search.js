class SearchPage{
    constructor(){
        this.searchButton = '#search_action';
        this.searchInput = '#search'
    }

    searchProduct(product){
        cy.get(this.searchButton).click();
        cy.get(this.searchInput).type(product);
        cy.get(this.searchButton).click();
    }


}

export default new SearchPage();