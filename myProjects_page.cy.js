/*Preconditions: 
    - In order to pass these tests successfully, the user needs to have at least 13 projects to test the pagination buttons.
*/

describe("My Projects page", () => {
  before(() => {
    cy.visit("/");
    cy.viewport(1629, 882);
    cy.contains("Ecosystem").should("be.visible").click();
    cy.url().should(
      "eq",
      "https://solana-next-com-staging.vercel.app/ecosystem"
    );
    cy.get(
      ".d-md-flex > :nth-child(3) > .sc-47d31334-0 > .dropdown > #dropdown-basic"
    ).click();
    cy.contains("Sign in").should("exist").click();
    cy.wait(13000);
    cy.get(
      ".d-md-flex > :nth-child(3) > .sc-47d31334-0 > .dropdown > #dropdown-basic"
    ).click();
    cy.contains("My projects")
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
  });

  it("Verifies that the user is on the My projects page", () => {
    cy.wait(3000);
    cy.url().should(
      "eq",
      "https://solana-next-com-staging.vercel.app/ecosystem/profile"
    );
  });

  it("Verifies that projects have loaded and are visible", () => {
    cy.get(
      "div main:nth-child(2) section.container div.row div.col-lg-8.mx-auto > div.position-relative"
    ).should("be.visible");
  });

  it("Upvotes a project", () => {
    cy.get(":nth-child(2) > .card > .card-body > .sc-78452f0c-2")
      .should("be.visible")
      .click({ force: true });
    cy.wait(3000);
  });

  /*it("Verifies that the pagination buttons work", () => {
    cy.contains("NEXT PAGE").should("be.visible").click();
    cy.wait(4000);
    cy.contains("PREVIOUS PAGE").should("exist").click();
  });

  it("Verifies that the user can return to the ecosystem page via the Home button", () => {
    cy.get(
      "div header div div div.d-flex.justify-content-between div.d-flex.flex-grow-1:nth-child(1) div svg:nth-child(1) > path:nth-child(1)"
    )
      .should("exist")
      .click();
    cy.url().should(
      "eq",
      "https://solana-next-com-staging.vercel.app/ecosystem"
    );
  }); */
});
