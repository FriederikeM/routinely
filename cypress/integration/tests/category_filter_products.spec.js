/// <reference types="cypress" />

describe("Navigate to products page filter by category", () => {
  it("finds the link to the product page, clicks it and gets directed there", () => {
    cy.visit("http://localhost:4000");
    cy.get(".product-link").click();
    cy.url().should("include", "/products");
  });

  it("Chooses category and shows the products belonging to the chosen category", () => {
    cy.get(".category-search-bar").select("Exfoliators");
    cy.get(".category-search-bar").should("have.value", "Exfoliators");
    cy.get(".ProductCard").should("have.length", 5);
  });
});
