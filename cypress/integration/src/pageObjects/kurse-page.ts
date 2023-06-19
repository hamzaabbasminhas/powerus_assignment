/// <reference types="cypress" />

export class KursePage{

    CourseCards(){
        return cy.get('app-course-card')
    }

}
