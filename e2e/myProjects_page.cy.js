/*Preconditions: 
    - In order to pass these tests successfully, the user needs to have at least 13 projects to test the pagination buttons.
*/

describe("My Projects page", () => {

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("next-auth.session-token");
  });

  before(() => {
    cy.login().wait(1000)
    cy.get('.d-md-flex > :nth-child(3) > .EcosystemHeaderUserDropdown__StyledUserDropdown-sc-47d31334-0 > .dropdown > #dropdown-basic').click({ force: true });
    cy.contains("My projects").should("exist").click({ force: true });
  });

  afterEach(() => {
    cy.wait(2000);
  });



  it("Verifies that the user is on the My projects page", () => {
    cy.url().should("include", "/ecosystem/profile");
  });

  // it("Verifies that projects have loaded and are visible", () => {
  //   cy.get(
  //     "div main:nth-child(2) section.container div.row div.col-lg-8.mx-auto > div.position-relative"
  //   ).should("be.visible");
  // });

  it("Upvotes a project", () => {
    cy.wait(2000)
    cy.get(':nth-child(1) > .card > .card-body > .EcosystemSingleProjectCard__StyledCardAction-sc-d2f29643-2')
      .eq(0)
      .should("exist")
      .click({ force: true });
    cy.wait(2000)
  });

  it("Verifies that the pagination buttons work", () => 
  {
    cy.get('div.CommonWrapper-sc-4a1eb22-0.bBcCrj section.container div.row div.col-lg-8.mx-auto div.position-relative > div.d-md-flex.justify-content-between.mt-5')
            .parent('div')
            .within(() => {
                cy.get('[type="button"]').eq(1)
                .should('exist')
                .click({force: true})
                .wait(2000)
            })
      cy.get('div.CommonWrapper-sc-4a1eb22-0.bBcCrj section.container div.row div.col-lg-8.mx-auto div.position-relative > div.d-md-flex.justify-content-between.mt-5')
      .parent('div')
      .within(() => {
          cy.get('[type="button"]').eq(0)
          .should('exist')
          .click({force: true})
      })        
  });

  it("Verifies that the user can return to the ecosystem page via the Home button, then logs out", () => {
    cy.get(
      "div header div div div.d-flex.justify-content-between div.d-flex.flex-grow-1:nth-child(1) div svg:nth-child(1) > path:nth-child(1)"
    )
      .should("exist")
      .click();
    cy.url().should("include", "/ecosystem");
    cy.logout()
  });


});
