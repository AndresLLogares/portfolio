describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    cy.get("h4").contains("Andrés Logares");
    cy.get("p").contains("Please select a language to continue");
    cy.get("button").contains("Spanish").click();
    cy.url().should("include", "/HomeSpanish");
    cy.get('a[href*="https://clothbea.netlify.app/"]').click();
  });
});
