describe("Explore Page", () => {
  before(() => {
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
    cy.contains("Show more").should("exist").click();
    cy.wait(2000);
    cy.url().should(
      "eq",
      "https://solana-next-com-staging.vercel.app/ecosystem/explore"
    );
  });

  it("User can switch between popular and newest tabs", () => {
    cy.contains("Newest").should("exist").click();
    cy.contains("Popular").should("exist").click();
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
    cy.get(":nth-child(1) > .card > .card-body > .sc-78452f0c-2")
      .should("exist")
      .click();
  });

  it("Verifies that the pagination buttons work", () => {
    cy.get(".pb-8 > .d-md-flex > :nth-child(2)").should("exist").click();
    cy.wait(2000);
    cy.get(".pb-8 > .d-md-flex > :nth-child(1)").should("exist").click();
  });
});
