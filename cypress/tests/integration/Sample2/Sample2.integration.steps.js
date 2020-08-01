import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('I can add two numbers', () => {
  expect(2 + 2).equal(4);
});
