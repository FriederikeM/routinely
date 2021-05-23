/// <reference types="cypress" />

import Chance from "chance";
const chance = new Chance();

const randomCheckbox = chance.integer({ min: 0, max: 6 });

describe("Choose new page", () => {
  it("finds the link to the product page, clicks it and gets directed there", () => {
    cy.visit("http://localhost:4000");
    cy.wait(3000);
    cy.get(".product-link").click();
    cy.wait(1000);
  });

  it("Picks out a random product to add to the routine", () => {
    cy.get("ul>li").eq(1).find("button").click();
    cy.wait(1000);
  });

  it("Chooses a day of the week and the time of day", () => {
    cy.get('[type="checkbox"]').eq(randomCheckbox).check();
    cy.get(".morning-checkbox").check();
    cy.get(".evening-checkbox").check();
    cy.wait(1000);
  });

  it("Chooses an opening date", () => {
    cy.get('[type="date"]').focus().type("2021-05-19");
    cy.wait(1000);
  });

  it("Adds the product to the routine and adds conflicting product to the routine", () => {
    cy.get(".add-product").click();
    cy.wait(1000);
    cy.get("ul>li").eq(2).find("button").click();
    cy.get('[type="checkbox"]').eq(randomCheckbox).check();
    cy.get(".morning-checkbox").check();
    cy.wait(1000);
    cy.get(".swap-product").click();
    cy.get(".evening-checkbox").check();
    cy.wait(1000);
    cy.get(".cancel-alert").click();
    cy.get(".add-product").click();
    cy.get(".weekly-routine-link").click();
    cy.wait(1000);
  });
});
