//Testing out the Ecosystem page and its functoinalities

describe("Ecosystem Page", () => {
  beforeEach(() => {
    cy.visit("https://solana-next-com-staging.vercel.app");
    cy.contains("Ecosystem").should("be.visible").click();
    cy.url().should(
      "eq",
      "https://solana-next-com-staging.vercel.app/ecosystem"
    );
    cy.get(
      ".d-md-flex > :nth-child(3) > .sc-47d31334-0 > .dropdown > #dropdown-basic"
    ).click();
    cy.contains("Sign in").should("exist").click();
    cy.wait(10000);
  });

  it("user can search for a project", () => {
    cy.get(".projSearch")
      .should("exist")
      .type("Squads")
      .should("have.value", "Squads");
    cy.wait(3000);
    cy.get(".projSearch").clear().should("be.empty");
  });

  it("user can browse by category", () => {
    cy.get(".sc-3a79b53a-0.d-none > .dropdown > #dropdown-button-dark-example1")
      .should("exist")
      .contains("Browse by category")
      .click();
    cy.get(".sc-3a79b53a-1 > input").should("be.empty").type("explorer");
    cy.get(".category-list > :nth-child(1)").click();
    cy.wait(1000);
    cy.get(".selectedCategory").click();
  });

  it("The Submit Project button is clickable and links to the submit page", () => {
    cy.contains("Submit Project").should("be.visible").click();
  });

  it("User can toggle between popular and newest tabs", () => {
    cy.contains("Newest").should("exist").click();
    cy.contains("Popular").should("exist").click();
  });

  it("Verifies that the Show more button is clickable", () => {
    cy.contains("Show more").should("exist").click();
    cy.url().should(
      "eq",
      "https://solana-next-com-staging.vercel.app/ecosystem/explore"
    );
  });

  it("User can Upvote/ Downvote a project", () => {
    cy.get(":nth-child(1) > .card > .card-body > .sc-78452f0c-2")
      .should("exist")
      .click();
  });
});
