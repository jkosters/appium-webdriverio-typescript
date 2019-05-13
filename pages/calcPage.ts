/**
 * Page Objects help in better re-usablitity and maintenance of element locators.
 * This file exports CalculatorPageObject class
 */
import { getElement } from './../helpers';

export class CalculatorPageObject {
  public addOperatorSelector: string;
  public subtractOperatorSelector: string;
  public multiplyOperatorSelector: string;
  public divisionOperatorSelector: string;
  public equalOperatorSelector: string;
  public clearOperatorSelector: string;
  public outputTextSelector: string = 'com.android.calculator2.CalculatorEditText';
  public idLocatorSelector: string = 'com.android.calculator2:id/';
  public digitLocatorSelector: string = 'com.android.calculator2:id/digit';

  constructor() {
    this.addOperatorSelector = this.androidIDSelector(this.calcOperatorSelector('plus'));
    this.subtractOperatorSelector = this.androidIDSelector(this.calcOperatorSelector('minus'));
    this.multiplyOperatorSelector = this.androidIDSelector(this.calcOperatorSelector('mul'));
    this.divisionOperatorSelector = this.androidIDSelector(this.calcOperatorSelector('div'));
    this.equalOperatorSelector = this.androidIDSelector(this.calcOperatorSelector('equal'));
    this.clearOperatorSelector = this.androidIDSelector(this.calcOperatorSelector('allClear'));
    this.outputTextSelector = this.androidClassSelector(this.outputTextSelector);
  }

  public async selectCalcDigit(selector: string) {
    const idSelector = this.androidIDSelector(this.digitLocatorSelector + selector);
    return await getElement(idSelector);
  }

  public get addOperator() { return getElement(this.addOperatorSelector); }
  public get subtractOperator() { return getElement(this.subtractOperatorSelector); }
  public get multiplyOperator() { return getElement(this.multiplyOperatorSelector); }
  public get divisionOperator() { return getElement(this.divisionOperatorSelector); }
  public get equalOperator() { return getElement(this.equalOperatorSelector); }
  public get clearOperator() { return getElement(this.clearOperatorSelector); }
  public get outputTextOperator() { return getElement(this.outputTextSelector); }

  private androidIDSelector = (selector: any): string => {
    let str = `'android=new UiSelector().resourceId("${selector}")'`;
    str = str.substring(1, str.length - 1);
    return str;
  }

  private androidClassSelector = (selector: any): string => {
    let str = `'android=new UiSelector().className("${selector}")'`;
    str = str.substring(1, str.length - 1);
    return str;
  }

  private calcOperatorSelector = (selector: string): string => {
    return this.idLocatorSelector + selector;
  }
}
