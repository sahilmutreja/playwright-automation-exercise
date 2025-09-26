import { Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { POManager } from '../pages/POManager.js';

let browser, page;
browser = await chromium.launch({ headless: false });
page = await browser.newPage();
const poManager = new POManager(page);

Given('user navigates to url {string}', async function (url) {
  let homePage = await poManager.getHomePage();
  await homePage.navigate(url);
});

When('user clicks on {string} button', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('user verifies {string} is visible', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});