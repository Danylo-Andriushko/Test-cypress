///<reference types='cypress'/>

describe('Input field',()=>{
    beforeEach(()=>{
        cy.visit('/habits')
    })
    it('Add first text',()=>{
        cy.get('.Habit-add-btn').click()
        cy.get("input[placeholder='Habit']").click().type('I"ve just started to learn cypress, and this is my first test')
        cy.contains('Save Changes').click()
    })
    it('Add second text',()=>{
        cy.get('.Habit-add-btn').click()
        cy.get("input[placeholder='Habit']").click().type('And I want to improve my skills on TA')
        cy.contains('Save Changes').click()
    })
})