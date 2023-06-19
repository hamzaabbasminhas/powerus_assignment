
import { KursePage } from "../pageObjects/kurse-page";

describe('Register user and test course page', ()=>{

    const kursePage = new KursePage;
    let data;
    let length: number;


    beforeEach(()=>{
         //Go to the url and change to mobile view
         cy.setup('samsung-s10')

         //get data from fixture files
         cy.fixture('data').then((fdata) => {
            data = fdata
        }
        );
    })

    it('Test for verifiying number of courses and titles of courses', ()=>{
        //Do the registeration process for the user
        cy.registerUser();
 
        //assert the title and number of users
        kursePage.CourseCards().each(($e1, index, list)=>{
            length = list.length;
            let expectText = $e1.find('a>p').eq(1).text()
            expect(expectText).to.equal(data.coursesNames[index])

        }).then(()=>{
            expect(length).to.equal(data.coursesNames.length)
        })
    })

})