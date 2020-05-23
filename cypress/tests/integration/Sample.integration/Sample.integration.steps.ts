import { Given } from "cypress-cucumber-preprocessor/steps";

import { environments } from "../../../fixtures/environments.const";

Given("I visit the home page", () => {
  cy.visit(environments.local);
});
