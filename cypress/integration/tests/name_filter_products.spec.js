/// <reference types="cypress" />

describe("Navigate to products page and filter products by name", () => {
  it("finds the link to the product page, clicks it and gets directed there", () => {
    cy.visit("http://localhost:3000");
    cy.get(".product-link").click();
    cy.url().should("include", "/products");
  });

  it("Types in name of a product and shows the products including the typed in name", () => {
    cy.get(".name-search-bar").focus().type("Niacinamide");
    cy.get(".name-search-bar").should("have.value", "Niacinamide");
    cy.get(".ProductCard").should("have.length", 2);
  });
});
