const { Builder, By, Key, until } = require('selenium-webdriver');

async function loginAndPerformActions() {
  // Create a new instance of the browser
  const driver = new Builder().forBrowser('firefox').build(); // 'firefox' can be replaced with 'chrome' if using Chrome

  try {
    // Navigate to the login page
    await driver.get('http://localhost:8000/en-US/account/login?return_to=%2Fen-US%2F');

    // Find and fill in the login fields
    const usernameInput = await driver.findElement(By.name('username'));
    const passwordInput = await driver.findElement(By.name('password'));

    await usernameInput.sendKeys('blalockj');
    await passwordInput.sendKeys('keyboard', Key.RETURN);

    // Wait for the next page to load after login
    await driver.wait(until.titleContains('Dashboard'), 10000); // Adjust timeout as needed

    // Continue with actions after login, for example:
    // const element = await driver.findElement(By.css('#myElement'));
    // await element.click();

    // Wait for some other condition
    // await driver.wait(until.elementLocated(By.css('#result')), 5000);

    // Perform additional actions
    // ...

    // The browser will remain open at this point

  } catch (error) {
    console.error('An error occurred:', error);
  }
}

loginAndPerformActions();
