//Testing out the Explore page and its functoinalities

describe("Explore Page", () => {
  before(() => {
    cy.login()
    cy.contains("Show more").should("exist").and('be.visible').click({ force: true });
    cy.wait(2000);
    cy.url().should("include", "/ecosystem/explore");
  });

  afterEach(() => {
    cy.wait(2000);
  });

  it("User can switch between popular and newest tabs", () => {
    cy.contains("Newest").should("exist").click({ force: true });
    cy.contains("Popular").should("exist").click({ force: true });
  });

  it("User can switch between periodical viewing tabs", () => {
    cy.contains("Today").should("be.visible").click();
    cy.contains("Weekly").should("be.visible").click();
    cy.contains("Monthly").should("be.visible").click();
    cy.contains("All-time").should("be.visible").click();
  });

  it("Verifies that the project cards have loaded and that the user can interact with its features", () => {
    cy.get('[class="d-block link-unstyled project-card-link"]').each(
      (item, index, list) => {
        expect(list).to.have.length(12);
      }
    );
    cy.get(
      "div div div div div div div.card.card-background div.card-body.d-flex.align-items-center > button"
    )
      .eq(0)
      .should("be.visible")
      .click();
  });

  it("Verifies that the pagination buttons work", () => {
    cy.get(".pb-8 > .d-md-flex > :nth-child(2)")
      .should("exist")
      .and("contain", "Next Page")
      .click();
    cy.wait(2000);
    cy.get(".pb-8 > .d-md-flex > :nth-child(1)")
      .should("exist")
      .and("contain", "Previous Page")
      .click();
  });
});
