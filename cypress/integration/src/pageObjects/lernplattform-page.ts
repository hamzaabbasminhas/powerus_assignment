/// <reference types="cypress" />

export class LernPlattformPage{

    AnmeldenButton(){
        return cy.contains('Jetzt kostenlos anmelden');
    }

}