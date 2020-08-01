import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('I visit Wikipedia', () => {
  cy.visit('https://wikipedia.org');
});
