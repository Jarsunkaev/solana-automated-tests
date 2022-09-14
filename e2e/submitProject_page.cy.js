//Testing out the Submit Project page

describe("Submit Project Page", () => {
  before(() => {
    cy.login();
    cy.contains("Submit Project").should("exist").click({ force: true });
    cy.wait(2000);
    cy.url().should("include", "/ecosystem/submit-project");
  });

  afterEach(() => {
    cy.wait(3000);
  });

  it("Fills out the form", () => {
    //Verifies that the form validation works and fill out the form on the first page

    cy.get('[type="submit"]').should("be.visible").click({ force: true });
    cy.get("#projectName").should("exist").type("Tevere River");
    cy.get("#tagline").should("exist").type("A river");
    cy.get("#website")
      .should("exist")
      .type("https://en.wikipedia.org/wiki/Tiber");
    cy.get("#description")
      .should("exist")
      .type(
        "The Tiber (/ˈtaɪbər/ TY-bər; Italian: Tevere [ˈteːvere];[1] Latin: Tiberis[2]) is the third-longest river in Italy and the longest in Central Italy."
      );
    cy.wait(2000);
    cy.get('[type="submit"]').should("be.visible").click({ force: true });
    cy.wait(3000);

    //Uploads images on the second page

    cy.get(
      ".ProjectSubmitMediaStep__StyledImageUpload-sc-447e7e5c-0"
    ).selectFile("cypress/fixtures/tiber.jpg");
    cy.contains("Browse for files").selectFile(
      [
        "cypress/fixtures/tiber.jpg",
        "cypress/fixtures/tiber2.jpg",
        "cypress/fixtures/tiber3.jpg",
      ],
      { action: "drag-drop" }
    );
    cy.wait(2000);
    cy.get('[type="submit"]').should("be.visible").click({ force: true });
    cy.wait(3000);

    //Selects category and project status on the third page

    cy.get(".CategorySelector__StyledInput-sc-f52d6281-0 > input")
      .should("exist")
      .and("be.empty")
      .click({ force: true });
    cy.get(".CategorySelector__StyledDropdown-sc-f52d6281-4 > :nth-child(1)")
      .eq(0)
      .should("exist")
      .click({ force: true });
    cy.get('[for="live-status"]')
      .should("exist")
      .and("be.visible")
      .click({ force: true });
    cy.get('[for="building-status"]')
      .should("exist")
      .and("be.visible")
      .click({ force: true });
    cy.wait(2000);
    cy.get('[type="submit"]').should("be.visible").click({ force: true });

    //Fills out the form on the fourth page (Socials)

    cy.get("#twitterURL")
      .should("exist")
      .and("be.empty")
      .click({ force: true })
      .type("https://twitter.com/intlrivers");
    cy.get("#discordURL")
      .should("exist")
      .and("be.empty")
      .click({ force: true })
      .type("https://discord.gg/bZUP7TtxrC");
    cy.get("#telegramURL")
      .should("exist")
      .and("be.empty")
      .click({ force: true })
      .type("https://t.me/ecosystemtester");

    //Connects Discord server
    cy.contains("Connect")
      .eq(0)
      .should("exist")
      .and("be.visible")
      .click({ force: true });
    cy.get("#socialID")
      .should("exist")
      .and("be.visible")
      .click({ force: true })
      .type("1001103778260463627");
    cy.contains("Save")
      .should("exist")
      .and("be.visible")
      .click({ force: true });

    //Connects Telegram Channel and submits form
    cy.contains("Connect")
      .should("exist")
      .and("be.visible")
      .click({ force: true });
    cy.get("#socialID")
      .should("exist")
      .and("be.visible")
      .click({ force: true })
      .type("-1001684009504");
    cy.contains("Save")
      .should("exist")
      .and("be.visible")
      .click({ force: true });
    cy.contains("Added").should("exist").and("be.visible");
    cy.get('[type="submit"]').should("be.visible").click({ force: true });
    cy.wait(3000)

    //Verifies that the submission success message is displayed and visits the project page

    cy.contains('Congrats, you submitted').should("exist").and("be.visible");
    cy.contains('See your project page').should("exist").and("be.visible").click({ force: true });
  });
});
