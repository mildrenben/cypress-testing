const lightDate = str => {
  const date = new Date().toString()
  const idx = date.search(/\d\d:\d\d:\d\d/)
  return `When: ${date.slice(0, idx + 6)}`
}

// eslint-disable no-undef

describe('Routing', () => {
  it('Visits index', () => cy.visit('/'))
  it('Input has autofocus and can be typed in', () => {
    cy.focused().should('have.attr', 'data-cy', 'Form_Input')
    cy.get('[data-cy=Form_Input]').type('Buy some milk')
  })
  it('Adds new tasks on button click', () => {
    cy.get('[data-cy=TodoItemList]').as('todoList')
    cy.get('[data-cy=Form_Submit]').as('submit')
    cy.get('[data-cy=Form_Input]').as('input')

    cy.get('@todoList').children().should('have.length', 0)
    
    cy.get('@submit').click()
    const date1 = lightDate()
    cy.get('@todoList').children().should('have.length', 1)
    cy.get('@todoList').children('*:nth-child(1)').children('[data-cy=TodoItem_Message]').should('have.text', 'Buy some milk')
    cy.get('@todoList').children('*:nth-child(1)').children('[data-cy=TodoItem_Timestamp]').should('contain', date1)
    
    cy.get('@input').type('Learn cypress')
    cy.get('@submit').click()
    const date2 = lightDate()
    cy.get('@todoList').children().should('have.length', 2)
    cy.get('@todoList').children('*:nth-child(2)').children('[data-cy=TodoItem_Message]').should('have.text', 'Learn cypress')
    cy.get('@todoList').children('*:nth-child(2)').children('[data-cy=TodoItem_Timestamp]').should('contain', date2)
    
    cy.get('@input').type('Tidy house')
    cy.get('@submit').click()
    const date3 = lightDate()
    cy.get('@todoList').children().should('have.length', 3)
    cy.get('@todoList').children('*:nth-child(3)').children('[data-cy=TodoItem_Message]').should('have.text', 'Tidy house')
    cy.get('@todoList').children('*:nth-child(3)').children('[data-cy=TodoItem_Timestamp]').should('contain', date3)
  })
  it('Ticks off items when complete is clicked', () => {
    cy.get('[data-cy=TodoItemList]').as('todoList')

    cy.get('@todoList').children('*:nth-child(1)').children('[data-cy=TodoItem_Complete]').click()
    cy.get('@todoList').children().should('have.length', 2)
    cy.get('@todoList').children('*:nth-child(1)').children('[data-cy=TodoItem_Message]').should('not.have.text', 'Buy some milk')
    
    cy.get('@todoList').children('*:nth-child(1)').children('[data-cy=TodoItem_Complete]').click()
    cy.get('@todoList').children().should('have.length', 1)
    cy.get('@todoList').children('*:nth-child(1)').children('[data-cy=TodoItem_Message]').should('not.have.text', 'Learn cypress')

    cy.get('@todoList').children('*:nth-child(1)').children('[data-cy=TodoItem_Complete]').click()
    cy.get('@todoList').children().should('have.length', 0)
  })
})