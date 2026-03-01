import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

Given(/^the user is on the click on side menu button$/, async () => {
    await $('~open menu').click();
});

When(/^the user click on Webview$/, async () => {
    await $('~menu item webview').click();
});

Then(/^the user should be redirected to the Webview page$/, async () =>{
    await expect($('~URL input field')).toBeDisplayed();
});

When(/^the user fill the URL input field and click on go to site$/, async () => {
    await $('~URL input field').addValue('https://www.atom.com/name/Test');
    await $('android=new UiSelector().text("Go To Site")').click();
});

// Then(/^the user should be redirected to the website$/, async () => {
//   await driver.waitUntil(async () =>
//     (await driver.getUrl()).includes('atom.com/name/Test'),
//     { timeout: 30000 }
//   );
// });




