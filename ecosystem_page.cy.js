//Testing out the Ecosystem page and its functoinalities

describe("Ecosystem Page", () => {
  before(() => {
    cy.visit("/");
    cy.viewport(1480, 882);
    cy.contains("Ecosystem").should("be.visible").click();
    cy.url().should("include", "/ecosystem");
    cy.get("#dropdown-basic").click({ force: true });
    cy.contains("Sign in").should("exist").click({ force: true });
    cy.wait(13000);
  });

  afterEach(() => {
    cy.contains("Ecosystem").scrollIntoView().should("exist").click({ force: true });
    cy.url().should(
      "include",
      "/ecosystem")
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
    cy.contains("Browse by category").should("exist").click({ force: true });
    cy.get(
      "div header div.EcosystemHeader__SecondaryNav-sc-9d1b01ce-1.bKtvvV div div > input:nth-child(2)"
    )
      .should("be.empty").eq(1)
      .type("explorer");
    cy.get(".category-list > :nth-child(1)").click();
    cy.wait(1000);
    cy.get(".selectedCategory").click({ force: true });
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
    cy.url().should("include", "/ecosystem/explore");
  });

  it("User can Upvote/ Downvote a project", () => {
    cy.get("div div.container div div div div div div.card.card-background div > button").eq(0)
      .should("exist")
      .click({ force: true });
  });
});
