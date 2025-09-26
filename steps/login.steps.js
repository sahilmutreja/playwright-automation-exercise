import { Given, When, Then } from '@cucumber/cucumber';

let browser, page;

const terminalUser = process.env.USER;
const terminalPass = process.env.PASS;

  When('user enters correct email address {string} and password {string}', async function (user, pass) {
    if(terminalUser!=null || terminalUser!=""){
      user = terminalUser;
    }
    await page.locator('#userEmail').fill(user);
    return 'pending';
  });