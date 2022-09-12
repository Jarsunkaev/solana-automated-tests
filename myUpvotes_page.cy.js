//Testing out the My Upvotes page and its functoinalities


describe("My Upvotes page", () => {
  before(() => {
    cy.visit("/");
    cy.contains("Ecosystem").should("be.visible").click();
    cy.url().should(
      "include",
      "/ecosystem"
    );
    cy.get(
      "#dropdown-basic"
    ).click({force : true});
    cy.contains("Sign in").should("exist").click({force : true});
    cy.wait(13000);
    cy.get(
      "#dropdown-basic"
    ).click({force : true});
    cy.contains("my upvotes").scrollIntoView().should("be.visible").click({force : true});
    cy.wait(3000);
  });

  it("Verifies that the user is on the My upvotes page", () => {
    cy.url().should(
      "include",
      "/ecosystem/profile?my-upvotes"
    );
  });

  it("Verifies that projects have loaded and are visible", () => {
    cy.get(
      "div main:nth-child(2) section.container div.row div.col-lg-8.mx-auto > div.position-relative"
    ).should("be.visible");
  });

  it("Downvotes a project", () => {
    cy.get(
      "div.sc-4a1eb22-0.jtPlSE section.container div.row div.col-lg-8.mx-auto div.position-relative div.sc-6f858ef5-0.lizEoH div.d-block.link-unstyled.project-card-link:nth-child(1) div.card.card-background div.card-body.d-flex.align-items-center > button.sc-78452f0c-2.cjZKkF"
    )
      .should("be.visible")
      .click();
  });

  it("Verifies that the pagination buttons work", () => {
    cy.contains("Next Page").should("be.visible").click();
    cy.wait(3000);
    cy.contains("Previous Page").should("be.visible").click();
  });

  it("Verifies that the user can return to the ecosystem page via the Home button", () => {
    cy.get(
      "div header div div div.d-flex.justify-content-between div.d-flex.flex-grow-1:nth-child(1) div svg:nth-child(1) > path:nth-child(1)"
    )
      .should("exist")
      .click();
    cy.url().should(
      "include",
      "/ecosystem"
    );
  });
});
