//Testing out the Explore page and its functoinalities

describe("Explore Page", () => {
  before(() => {
    cy.visit("/");
    cy.viewport(1480, 882);
    cy.contains("Ecosystem").should("be.visible").click();
    cy.url().should("include", "/ecosystem");
    cy.get("#dropdown-basic").click({ force: true });
    cy.contains("Sign in").should("exist").click({ force: true });
    cy.wait(13000);
    cy.contains("Show more").should("exist").click();
    cy.wait(2000);
    cy.url().should("include", "/ecosystem/explore");
  });

  it("User can switch between popular and newest tabs", () => {
    cy.contains("Newest").should("exist").click({ force: true });
    cy.contains("Popular").should("exist").click({ force: true });
  });

  it("User can switch between periodical viewing tabs", () => {
    cy.contains("Today").should("exist").click();
    cy.contains("Weekly").should("exist").click();
    cy.contains("Monthly").should("exist").click();
    cy.contains("All-time").should("exist").click();
  });

  it("Verifies that the project cards have loaded and that the user can interact with its features", () => {
    cy.get('[class="d-block link-unstyled project-card-link"]').each(
      (item, index, list) => {
        expect(list).to.have.length(12);
      }
    );
    cy.get("div div div div div div div.card.card-background div.card-body.d-flex.align-items-center > button").eq(0)
      .should("be.visible")
      .click();
  });

  it("Verifies that the pagination buttons work", () => {
    cy.get(".pb-8 > .d-md-flex > :nth-child(2)").should("exist").click();
    cy.wait(2000);
    cy.get(".pb-8 > .d-md-flex > :nth-child(1)").should("exist").click();
  });
});
