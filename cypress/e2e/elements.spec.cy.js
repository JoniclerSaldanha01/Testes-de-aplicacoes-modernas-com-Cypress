
  /// <reference types="cypress" />

  describe('Work with basic elements', () => {
      beforeEach(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

      })



    it('Text', () =>{     
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', () => {      
      
      cy.get('[href="#"]').click()
      cy.get('#resultado').should('have.text', 'Voltou!')

      cy.reload()
      cy.get('#resultado').should('have.not.text', 'Voltou!')
      cy.contains('Voltar').click()
      cy.get('#resultado').should('have.text', 'Voltou!')
      
    })

it.only('TextFields', () =>{
  //INSERE TEXTO NO ELEMENTO
  cy.get('#formNome').type('Cypress Test')

  //VALIDA TEXTO 
  cy.get('#formNome').should('have.value', 'Cypress Test')

  cy.get('#elementosForm\\:sugestoes')
    .type('TextArea')
    .should('have.value', 'TextArea')

    cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
      .type('teste')

      // INPUT TEXTO E APAGA OS 2 ULTIMOS CARACTERES
      cy.get('[data-cy="dataSobrenome"]')
       .type('Teste12345{backspace}{backspace}')
       .should('have.value', 'Teste123')

       // APAGA TODO O TEXTO E INSERE NOVO TEXTO
         cy.get('#elementosForm\\:sugestoes')
           .clear()
           .type('Erro{selectall}acerto', {delay:100})
           .should('have.value', 'acerto')
})

  })