/// <reference types="cypress" />

describe('Teste para EBAC - Agenda de Contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve carregar o header da página corretamente', () => {
        cy.get('.sc-jTrPJq > h1').contains('Agenda de');
        cy.get('.adicionar').contains('Adicionar');
        cy.get('.sc-beqWaB').should('exist');
        cy.screenshot('Carregamento')
    });

    it('Deve adicionar um novo contato', () => {
        cy.get('[type="text"]').type('João do Caminhão');
        cy.get('[type="email"]').type('joao.caminhao@oldcars.com');
        cy.get('[type="tel"]').type('+11-111-111-111');
        cy.get('.adicionar').click();
        cy.get('.sc-beqWaB').contains('João do Caminhão');
        cy.screenshot('Adicao')
    });

    it('Deve querer editar um contato mas desiste de ultima hora', () => {
        cy.get('.sc-beqWaB').first().find('button.edit').click();
        cy.get('[type="text"]').clear();
        cy.get('[type="text"]').type('Juca do Fusca');
        cy.get('[type="email"]').clear();
        cy.get('[type="email"]').type('juca.fuca@oldcars.com');
        cy.get('[type="tel"]').clear();
        cy.get('[type="tel"]').type('+22-222-222-222');
        cy.get('.cancelar').click();
        cy.get('.sc-beqWaB').should('not.contain', 'Juca do Fusca');
        cy.screenshot('Cancelar alteração')
    });

    it('Deve editar um contato', () => {
        cy.get('.sc-beqWaB').first().find('button.edit').click();
        cy.get('[type="text"]').clear();
        cy.get('[type="text"]').type('Marilia da Brasilia');
        cy.get('[type="email"]').clear();
        cy.get('[type="email"]').type('marilia.brasila@oldcars.com');
        cy.get('[type="tel"]').clear();
        cy.get('[type="tel"]').type('+33-333-333-333');
        cy.get('.alterar').click();
        cy.get('.sc-beqWaB').contains('Marilia da Brasilia');
        cy.screenshot('Alteração')
    });

    it('Deve excluir um contato', () => {
        cy.contains('.sc-beqWaB', 'João do Caminhão').first().find('button.delete').click();
        cy.on('window:confirm', () => true);
        cy.get('.sc-beqWaB').should('not.contain', 'João do Caminhão');
        cy.screenshot('Remoção de Usuário')
    });
});
