import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

Given(/^the user is on the catalog$/, async () => {
    await expect($('android=new UiSelector().text("Products")')).toBeDisplayed();
});

When(/^the user tap on a product$/, async () => {
    await $('android=new UiSelector().className("android.view.ViewGroup").instance(29)').click();
});

Then(/^the user should be redirected to product details screen$/, async () => {
    await expect($('android=new UiSelector().text("Add To Cart")')).toBeDisplayed()
});

When(/^the user tap on add to cart button$/, async () => {
    await $('android=new UiSelector().text("Add To Cart")').click();
});

Then(/^the product should be added on the user cart$/, async () => {
    await expect($('android=new UiSelector().text("1").instance(0)')).toBeDisplayed();
});

When(/^the user tap on cart icon$/, async () => {
    await $('~cart badge').click();
});

Then(/^the user should be redirected to the cart screen$/, async () => {
    await expect($('android=new UiSelector().text("My Cart")')).toBeDisplayed();
});

When(/^the user tap on complete purshase$/, async () => {
    await $('~Proceed To Checkout button').click();
});

Then(/^the user should be redirected to Log in screen$/, async () => {
    await expect($('~Username input field')).toBeDisplayed();
});

When(/^the user fill Log in fields and confirm$/, async () => {
    await $('~Username input field').addValue('bob@example.com');
    await $('~Password input field').addValue('10203040');
    await $('~Login button').click();
});

Then(/^the user will be redirected to checkout screen$/, async () => {
    await expect($('android=new UiSelector().text("Checkout")')).toBeDisplayed();
});

When(/^the user fill personal checkout fields and confirm$/, async () => {
    await $('~Full Name* input field').addValue('Test case');
    await $('~Address Line 1* input field').addValue('Adress 123 ');
    await $('~Address Line 2 input field').addValue('NY 1234');
    await $('~Zip Code* input field').addValue('12345');
    await $('~City* input field').addValue('NY');
    await $('~State/Region input field').addValue('NY');
    await $('~Country* input field').addValue('USA');
    await $('android=new UiSelector().text("To Payment")').click();
});

Then(/^the the user should be redirected to the credit card checkout Screen$/,async () => {
    await expect($('~Card Number* input field')).toBeDisplayed();
});

When(/^the user fill credit card fields and confirm$/, async () => {
    await $('~Full Name* input field').addValue('Test case');
    await $('~Card Number* input field').addValue('4242424242424242');
    await $('~Expiration Date* input field').addValue('01/29');
    await $('~Security Code* input field').addValue('123');
    await $('android=new UiSelector().text("Review Order")').click();
});

Then(/^the user should be redirected to place order screen and tap on place order$/, async () => {
    await expect($('~Place Order button')).toBeDisplayed();   
    await $('~Place Order button').click();
});

