/// <reference types="Cypress"/>

describe('Flujos de la seccion MY WORKSPACES',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
        
        cy.get('[data-testid="input-username"]').clear().type("Andres")
        cy.get('[data-testid="password-username"]').clear().type("1234")
        cy.get('[data-testid="continue"]').click();
    })

it("Reservar un puesto de trabajo",()=>{
    var date = new Date();
    // add a day
    date.setDate(date.getDate() + 1);
    cy.get('button').contains('Reserve').click()
    cy.get('[data-testid="floorForm"').click()
    cy.get('[data-testid="floorOption"').first().click()
    cy.get('[data-testid="sectionForm"').click()
    cy.get('[data-testid="sectionOption"').first().click()
    cy.get('[data-testid="dateSelector"').click()
    cy.get('button').contains("OK").click()
    cy.get('[data-testid="inHour"').click()
    cy.get('button').contains("OK").click()
    cy.get('[data-testid="endHour"').click()
    cy.get('button').contains("OK").click()
    cy.get('button').contains('Buscar Puestos').click()
    cy.intercept('GET',' http://localhost:3001/workspaces',{fixture:'../fixtures/workspaces.json'}).as('listWorkspaces')
    cy.get('[data-testid="reserveBtn"]').first().click()
    cy.get('button').contains('Continuar').click()

})

it("Realizar Checkin",()=>{
    cy.intercept('GET','http://localhost:3001/userreserves',{fixture:'../fixtures/userreserves.json'}).as('listReserves')
    cy.get('[data-testid="docheckin"]').last().click()
    cy.get('button').contains('continuar').click()
    
})

it("Finalizar Reserva",()=>{
    cy.get('[data-testid="endReserve"]').last().click()
    cy.get('button').contains('continuar').click()
})
    
})