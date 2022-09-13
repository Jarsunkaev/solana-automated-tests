/*Preconditions: 
    - In order to pass these tests successfully, the user needs to have at least 13 projects to test the pagination buttons.
*/

describe("My Projects page", () => {
  before(() => {
    cy.visit("/");
    cy.viewport(1629, 882);
    cy.contains("Ecosystem").should("be.visible").click();
    cy.url().should("include", "/ecosystem");
    cy.get("#dropdown-basic").click({ force: true });
    cy.contains("Sign in").should("exist").click({ force: true });
    cy.wait(20000);
    cy.get("#dropdown-basic").click({ force: true });
    cy.contains("My projects").should("exist").click({ force: true });
  });

  it("Verifies that the user is on the My projects page", () => {
    cy.url().should("include", "/ecosystem/profile");
  });

  it("Verifies that projects have loaded and are visible", () => {
    cy.get(
      "div main:nth-child(2) section.container div.row div.col-lg-8.mx-auto > div.position-relative"
    ).should("be.visible");
  });

  it("Upvotes a project", () => {
    cy.get(
      "[class='EcosystemSingleProjectCard__StyledCardAction-sc-78452f0c-2 hKZsmz']"
    )
      .eq(0)
      .should("exist")
      .click({ force: true });
    cy.wait(2000)
  });

  it("Verifies that the pagination buttons work", () => {
    cy.get(".col-lg-8 > :nth-child(1) > .d-md-flex > :nth-child(2)")
      .should("exist")
      .click({waitForAnimations: true});
    cy.get('.col-lg-8 > :nth-child(1)').should('be.visible')
    cy.get(".col-lg-8 > :nth-child(1) > .d-md-flex > :nth-child(1)")
      .should("exist")
      .click({waitForAnimations: true});
  });

  it("Verifies that the user can return to the ecosystem page via the Home button", () => {
    cy.get(
      "div header div div div.d-flex.justify-content-between div.d-flex.flex-grow-1:nth-child(1) div svg:nth-child(1) > path:nth-child(1)"
    )
      .should("exist")
      .click();
    cy.url().should("include", "/ecosystem");
  });
});
