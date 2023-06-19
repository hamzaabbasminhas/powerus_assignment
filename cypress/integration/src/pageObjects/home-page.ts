/// <reference types="cypress" />

export class HomePage{

    LernplattformLink(){
        return cy.get('[href="lernplattform"]')
    }

}