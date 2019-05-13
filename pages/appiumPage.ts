/**
 * Page Objects help in better re-usablitity and maintenance of element locators.
 * This file exports GooglePageObject & AppiumPageObject classes
 */

import {getElement, getElementText, isElementDisplayed } from './../helpers';

class GooglePageObject {
    public get searchTextBox() { return getElement('input[type="search"]'); }
    public get searchButton() { return getElement('button[aria-label="Google Search"]'); }
    public get results() { return isElementDisplayed('#ires #rso'); }
    public get firstLink() { return getElement('#rso > div:nth-child(1) > div > div > div > div:nth-child(1) > div > a'); }
}

class AppiumPageObject {
    public get linkButton() { return getElement('body > nav.navbar.navbar-inverse.navbar-static-top button'); }
    public get tutorialLink() { return getElement('#bs-example-navbar-collapse-1 > ul > li:nth-child(7) > a'); }
    public get firstBook() { return getElement('#readmeMarkdown > div:nth-child(1) > a.resource-title'); }
    public get androidTutorialTitle() { return getElementText('#native-android-automation'); }
}

/*
Public Interface - export instances of classes
**/
export const GooglePage = new GooglePageObject();
export const AppiumPage = new AppiumPageObject();
