/**
 * Step Definitons are the glue code which drive
 * the feature scenarios, Cucumber helps us provide
 * gherkin language syntax's - Given, When, Then
 */

import { AppiumPage, GooglePage } from '../pages/appiumPage';
const { Given, When, Then, BeforeAll } = require('cucumber');
import { expect } from 'chai';
import { verifyTitle, verifyUrl } from './../helpers';

Given(/^I am on google page$/, async () => {
  expect(await browser.getTitle()).to.equal('Google');
});

When(/^I type "(.*?)"$/, async (text) => {
  const subject = await GooglePage.searchTextBox;
  subject.setValue(text);
});

When(/^I click on first search link$/, async () => {
  const subject = await GooglePage.firstLink;
  subject.click();
});

Then(/^I click on search button$/, async () => {
  const subject = await GooglePage.searchButton;
  subject.click();
});

Then(/^appium links should be displayed$/, async () => {
  expect(await GooglePage.results).to.equal(true);
});

Then(/^I should be navigated to appium's official site "(.*?)"$/, async (expectedUrl) => {
  await browser.waitUntil(verifyUrl(expectedUrl), 5000, `expected url to be ${expectedUrl}`);
});

Then(/^I verify the title of the page to be "(.*?)"$/, async (expectedTitle) => {
  await browser.waitUntil(verifyTitle(expectedTitle), 5000, `expected url to be ${expectedTitle}`);
});

When(/^I click on top menu button$/, async () => {
  const subject = await AppiumPage.linkButton;
  subject.click();
});

When(/^I click on tutorial link$/, async () => {
  const subject = await AppiumPage.tutorialLink;
  subject.click();
});

Then(/^I click on android tutorial link$/, async () => {
  const subject = await AppiumPage.firstBook;
  subject.click();
});

Then(/^I verify the title of android tutorial page to be "(.*?)"$/, async (expectedTitle) => {
  await browser.waitUntil(verifyTitle(expectedTitle), 5000, `expected url to be ${expectedTitle}`);
});
