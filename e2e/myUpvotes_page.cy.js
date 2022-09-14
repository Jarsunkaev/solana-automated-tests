//Testing out the My Upvotes page and its functoinalities

describe("My Upvotes page", () => {
  beforeEach(() => {
    Cypress.Cookies.preserveOnce("next-auth.session-token");
  });

  before(() => {
    cy.login().wait(1000)
    cy.get("#dropdown-basic").click({ force: true });
    cy.contains("My upvotes").should("exist").click({ force: true });
  });

  afterEach(() => {
    cy.wait(2000);
  });

  it("Verifies that the user is on the My upvotes page", () => {
    cy.url().should(
      "include",
      "/ecosystem/profile?my-upvotes"
    );
  });

  // it("Verifies that projects have loaded and are visible", () => {
  //   cy.get(
  //     "div main:nth-child(2) section.container div.row div.col-lg-8.mx-auto > div.position-relative"
  //   ).should("be.visible");
  //   cy.wait(1000)
  // });

  it("Downvotes a project", () => {
    cy.get(
      "[class='EcosystemSingleProjectCard__StyledCardAction-sc-d2f29643-2 bmtXTn']"
    )
      .eq(0)
      .should("be.visible")
      .click();
  });

  it("Verifies that the pagination buttons work", () => {
    cy.get('.col-lg-8 > :nth-child(1) > .d-md-flex > :nth-child(2)').should("be.visible").click();
    cy.wait(3000);
    cy.get('.col-lg-8 > :nth-child(1) > .d-md-flex > :nth-child(1)').should("be.visible").click();
  });

  it("Verifies that the user can return to the ecosystem page via the Home button, then logs out", () => {
    cy.get(
      "div header div div div.d-flex.justify-content-between div.d-flex.flex-grow-1:nth-child(1) div svg:nth-child(1) > path:nth-child(1)"
    )
      .should("exist")
      .click();
    cy.url().should(
      "include",
      "/ecosystem"
    );
    cy.logout()
  });
});
