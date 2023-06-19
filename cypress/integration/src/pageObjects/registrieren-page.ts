/// <reference types="cypress" />

export class RegistrierenPage{

    ElektronikButton(){
        return cy.contains('Elektronik');
    }
    
    AbgeschlosseneButton(){
        return cy.contains('Abgeschlossene Berufsausbildung');
    }

    ZumLetztenSchrittcyButton(){
        return cy.contains('Zum letzten Schritt')
    }
    
    KostenlosregistrierenButton(){
        return cy.contains('Kostenlos registrieren').click()
    }

}