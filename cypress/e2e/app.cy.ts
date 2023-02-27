describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="about"]').click();

    // The new url should include "/about-us"
    cy.url().should("include", "/about-us");

    // The new page should contain an h1 with "About Us"
    cy.get("h1").contains("About Us");
  });
});
