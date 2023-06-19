import { HomePage } from "../integration/src/pageObjects/home-page";
import { LernPlattformPage } from "../integration/src/pageObjects/lernplattform-page";
import { RegistrierenPage } from "../integration/src/pageObjects/registrieren-page";
import * as faker from 'faker';

const homePage = new HomePage;
const registrierenPage = new RegistrierenPage;
const lernplattformPage = new LernPlattformPage;

Cypress.Commands.add('setup', (device) => {
    cy.visit('')
    cy.viewport(device)
})

Cypress.Commands.add('registerUser', ()=>{
 
  homePage.LernplattformLink().click();
  lernplattformPage.AnmeldenButton().click();
  registrierenPage.ElektronikButton().as('elektroikbtn').click({force:true});
  cy.get('@elektroikbtn').should('be.visible').click({force:true});
  registrierenPage.AbgeschlosseneButton().click();
  cy.enterUserData('firstName',faker.name.firstName());
  cy.enterUserData('lastName',faker.name.lastName());
  cy.enterUserData('email',faker.internet.email());
  cy.enterUserData('password', faker.internet.password());
  cy.wait(1000);
  registrierenPage.ZumLetztenSchrittcyButton().click();
  cy.enterUserData('phoneNumber',faker.phone.phoneNumber('151########'));
  cy.wait(1000);
  registrierenPage.KostenlosregistrierenButton().should('be.visible').click({force:true});
  cy.url().should('contain', 'kurse/alle')
})

Cypress.Commands.add('enterUserData', (type, data)=>{
    
    cy.get('[name="'+type+'"]').type(data)
})


