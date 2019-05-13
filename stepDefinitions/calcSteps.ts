/**
 * Step Definitons are the glue code which drive
 * the feature scenarios, Cucumber helps us provide
 * gherkin language syntax's - Given, When, Then
 */

const { Given, When, Then } = require('cucumber');
import { expect } from 'chai';
import { CalculatorPageObject } from '../pages/calcPage';

const calc: CalculatorPageObject = new CalculatorPageObject();

Given(/^I am on my mobile calculator app$/, async () => {
  const textView = await browser.$('android.widget.TextView');
  const title = await textView.getText();
  expect(title).to.equal('Calculator');
});

When(/^I add "(.*?)" and "(.*?)"$/, async (num1: string, num2: string) => {
  (await calc.selectCalcDigit(num1)).click();
  (await calc.addOperator).click();
  (await calc.selectCalcDigit(num2)).click();
  (await calc.equalOperator).click();
});

When(/^I subtract "(.*?)" from "(.*?)"$/, async (num1: string, num2: string) => {
  (await calc.selectCalcDigit(num1)).click();
  (await calc.subtractOperator).click();
  (await calc.selectCalcDigit(num2)).click();
  (await calc.equalOperator).click();
});

When(/^I multiply "(.*?)" with "(.*?)"$/, async (num1: string, num2: string) => {
  (await calc.selectCalcDigit(num1)).click();
  (await calc.multiplyOperator).click();
  (await calc.selectCalcDigit(num2)).click();
  (await calc.equalOperator).click();
});

When(/^I divide "(.*?)" with "(.*?)"$/, async (num1: string) => {
  (await calc.selectCalcDigit(num1)).click();
  (await calc.divisionOperator).click();
  (await calc.selectCalcDigit(num1)).click();
  (await calc.equalOperator).click();
});

When(/^I click on AC button$/, async () => {
  (await calc.clearOperator).click();
});

Then(/^the result "(.*?)" should be displayed$/, async (result: string) => {
  const outputTextOperator = await calc.outputTextOperator;
  const outputText = await outputTextOperator.getText();
  return expect(outputText).to.contain(result);
});

Then(/^the result should be cleared$/, async () => {
  const outputTextOperator = await calc.outputTextOperator;
  const outputText = await outputTextOperator.getText();
  return expect(outputText).to.equal('');
});
