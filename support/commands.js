// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//This command logs the user in via Twitter
Cypress.Commands.add('login', () => {
    cy.visit("/");
    cy.clearCookie("next-auth.session-token");
    cy.viewport(1480, 882);
    cy.contains("Ecosystem").should("be.visible").click();
    cy.url().should("include", "/ecosystem");
    cy.get("#dropdown-basic").click({ force: true });
    cy.contains("Sign in").should("exist").click({ force: true });
    cy.wait(20000);
  })

  Cypress.Commands.add('logout', () => {
    cy.get("#dropdown-basic").click({ force: true });
    cy.contains("Logout").should("exist").click({ force: true });
    cy.wait(1000);
  })