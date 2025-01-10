const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Navigate to the initial website
    await page.goto('https://initialwebsite.com');

    // Wait for the redirection to complete
    await page.waitForNavigation();

    // Execute a script on the redirected website
    const result = await page.evaluate(() => {
        // Your custom script here
        return document.title; // Example: Get the title of the page
    });

    console.log('Page Title:', result);

    await browser.close();
})();
