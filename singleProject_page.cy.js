describe("Single Project Page", () => {
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
    cy.contains("Hoglympics").click();
    cy.url().should(
      "eq",
      "https://solana-next-com-staging.vercel.app/ecosystem/hoglympics"
    );
  });

  it("User can navigate to a single project page", () => {
    cy.contains("Hoglympics").should("exist").click();
  });

  it("Verifies that the 'More info' modal can opened and closed", () => {
    cy.contains("More info").should("exist").click();
    cy.wait(2000);
    cy.contains("Close").should("exist").click();
  });

  it("Verifies that the user can upvote/ downvote the project", () => {
    //Upvote button
    cy.get(".project__aside > .sc-fd615ea6-0 > .sc-594db403-0")
      .should("exist")
      .click();
  });

  it("Verifies that the 'Try It' button links to an external website", () => {
    //Try it button
    cy.get('a[href="https://hoglympics.com/"]').should(
      "have.attr",
      "target",
      "_blank"
    );
  });

  //Uncomment this section if you want to test reporting a project

  /*it.only("Verifies that the user can report a project", () => {
        //Report project button
        cy.get('.project__aside > .text-center')
            .should('exist')
            .click()
        //Issue 
        cy.get('[class="sc-1e8d36b7-0 iXtist mt-8"]')
            .parent('div')
            .within(() => {
                cy.get('[type="button"]').eq(0)
                .should('exist')
                .click({force: true})
            })
        //Submit button
        cy.get('[class="border-0 pt-0 modal-footer"]')
        .parent('div')
        .within(() => {
            cy.get('[type="button"]').eq(1)
            .contains('Submit')
            .should('exist')
            .click({force: true})
        })
      }) */

  it("Verifies that the social buttons link to an external wesbite'", () => {
    //Twitter
    cy.get('a[href="https://twitter.com/hoglympics"]').should(
      "have.attr",
      "target",
      "_blank"
    );
    //Telegram
    cy.get('a[href="https://t.me/hoglympics"]').should(
      "have.attr",
      "target",
      "_blank"
    );
    //Discord
    cy.get('a[href="https://discord.com/invite/3ze3kbVFUh"]').should(
      "have.attr",
      "target",
      "_blank"
    );
  });

  it("it clicks on every image", () => {
    cy.get('a[class="d-block overflow-hidden"]').each(($img) => {
      cy.wait(1000);
      cy.wrap($img)
        .find("span")
        .should("be.visible")
        .click({ force: true, multiple: true });
    });
  });

  it("Verifies that the share modal can be opened/ closed", () => {
    cy.contains("Share").should("be.visible").click();
    //Close button
    cy.get('[aria-label="Close"]')
      .should("be.visible")
      .click({ multiple: true, force: true });
  });

  it("Verifies that the user can return to the ecosystem page via the Home button", () => {
    cy.get('[class="sc-9d1b01ce-3 fcJimy"]').should("exist").click();
    cy.url().should(
      "eq",
      "https://solana-next-com-staging.vercel.app/ecosystem"
    );
  });
});
