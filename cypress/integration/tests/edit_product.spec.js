/// <reference types="cypress" />

import Chance from "chance";
const chance = new Chance();

const randomProduct = chance.integer({ min: 0, max: 48 });

describe("Navigate to products page, choose a product, add it, then navigate to daily page and edit the product", () => {
  it("finds the link to the product page, clicks it and gets directed there", () => {
    cy.visit("http://localhost:3000");
    cy.get(".product-link").click();
    cy.url().should("include", "/products");
  });

  it("Picks out a random product to add to the routine", () => {
    cy.get("ul>li").eq(randomProduct).find("button").click();
    cy.get(".main").should("have.class", "not-modal");
  });

  it("Chooses a day of the week and the time of day", () => {
    cy.get('[type="checkbox"]').eq(1).check();
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.get(".morning-checkbox").check();
    cy.get(".morning-checkbox").should("be.checked");
    cy.get(".evening-checkbox").check();
    cy.get(".evening-checkbox").should("be.checked");
  });

  it("Chooses an opening date", () => {
    cy.get('[type="date"]').focus().type("2021-05-19");
    cy.get('[type="date"]').should("have.value", "2021-05-19");
  });

  it("Adds the product to the routine, goes to daily routine and edits product", () => {
    cy.get(".add-product").click();
    cy.get(".main").should("not.have.class", "not-modal");
    cy.get(".weekly-routine-link").click();
    cy.url().should("contain", "/weekly-routine");
    cy.get("button").click();
    cy.url().should("contain", "/weekly-routine/Tuesday");
    cy.get(".edit-button").eq(1).click();
    cy.get("div").children().should("have.class", "daily-not-modal");
    cy.get(".morning-checkbox").uncheck();
    cy.get(".morning-checkbox").should("not.be.checked");
    cy.get(".evening-checkbox").uncheck();
    cy.get(".evening-checkbox").should("not.be.checked");
    cy.get('[type="checkbox"]').eq(1).uncheck();
    cy.get('[type="checkbox"]').eq(1).should("not.be.checked");
    cy.get('[type="checkbox"]').eq(4).check();
    cy.get('[type="checkbox"]').eq(4).should("be.checked");
    cy.get(".morning-checkbox").check();
    cy.get(".morning-checkbox").should("be.checked");
    cy.get(".evening-checkbox").check();
    cy.get(".evening-checkbox").should("be.checked");
    cy.get(".add-product").click();
    cy.get("div").children().should("not.have.class", "not-modal");
    cy.get(".history-back").click();
    cy.url().should("contain", "/weekly-routine");
  });
});
