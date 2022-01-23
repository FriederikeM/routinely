/// <reference types="cypress" />

import Chance from "chance";
const chance = new Chance();

const randomCheckbox = chance.integer({ min: 0, max: 6 });

describe("Navigate to products page, add a product, then add a conflicting product and swap out the products in the morning", () => {
  it("finds the link to the product page, clicks it and gets directed there", () => {
    cy.visit("http://localhost:3000");
    cy.get(".product-link").click();
    cy.url().should("include", "/products");
  });

  it("Picks out a random product to add to the routine", () => {
    cy.get("ul>li").eq(1).find("button").click();
    cy.get(".main").should("have.class", "not-modal");
  });

  it("Chooses a day of the week and the time of day", () => {
    cy.get('[type="checkbox"]').eq(randomCheckbox).check();
    cy.get('[type="checkbox"]').eq(randomCheckbox).should("be.checked");
    cy.get(".morning-checkbox").check();
    cy.get(".morning-checkbox").should("be.checked");
    cy.get(".evening-checkbox").check();
    cy.get(".evening-checkbox").should("be.checked");
  });

  it("Chooses an opening date", () => {
    cy.get('[type="date"]').focus().type("2021-05-19");
    cy.get('[type="date"]').should("have.value", "2021-05-19");
  });

  it("Adds the product to the routine and adds conflicting product to the routine", () => {
    cy.get(".add-product").click();
    cy.get(".main").should("not.have.class", "not-modal");
    cy.get("ul>li").eq(2).find("button").click();
    cy.get(".main").should("have.class", "not-modal");
    cy.get('[type="checkbox"]').eq(randomCheckbox).check();
    cy.get('[type="checkbox"]').eq(randomCheckbox).should("be.checked");
    cy.get(".morning-checkbox").check();
    cy.get(".alert-message").should("include.text", "swap these products");
    cy.get(".swap-product").click();
    cy.get(".morning-checkbox").should("be.checked");
    cy.get(".evening-checkbox").check();
    cy.get(".alert-message").should("include.text", "swap these products");
    cy.get(".cancel-alert").click();
    cy.get(".evening-checkbox").should("not.be.checked");
    cy.get(".add-product").click();
    cy.get(".weekly-routine-link").click();
    cy.url().should("contain", "/weekly-routine");
  });
});
