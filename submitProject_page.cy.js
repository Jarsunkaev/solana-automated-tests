describe("Submit Project Page", () => {
  before(() => {
    cy.visit("/");
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
    cy.contains("Submit Project").should("exist").click();
    cy.wait(2000);
    cy.url().should(
      "eq",
      "https://solana-next-com-staging.vercel.app/ecosystem/submit-project"
    );
  });

  it("Fills out the first page of the form", () => {
    //Verifies that the form validation works
    cy.get('[type="submit"]').should('be.visible').click({ force: true })
    cy.get("#projectName").should("exist").type("Tiber River");
    cy.get("#tagline").should("exist").type("A river")
    cy.get("#website")
      .should("exist")
      .type("https://en.wikipedia.org/wiki/Tiber")
    cy.get("#description")
      .should("exist")
      .type(
        "The Tiber (/ˈtaɪbər/ TY-bər; Italian: Tevere [ˈteːvere];[1] Latin: Tiberis[2]) is the third-longest river in Italy and the longest in Central Italy."
      )
    cy.wait(2000)
    cy.get('[type="submit"]').should('be.visible').click({ force: true })
  });
});
