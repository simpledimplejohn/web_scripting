const { Builder, By, Key, until } = require('selenium-webdriver');

function loginAndPerformActions() {
  const driver = new Builder().forBrowser('firefox').build(); // 'firefox' can be replaced with 'chrome' if using Chrome

  const username = 'blalockj';
  const password = 'keyboard';

  driver.get('http://localhost:8000/en-US/account/login')
    .then(() => console.log('Logged in: Navigated to login page'))
    .then(() => driver.findElement(By.name('username')).sendKeys(username))
    .then(() => driver.findElement(By.name('password')).sendKeys(password, Key.RETURN))
    .then(() => console.log('Logged in: Entered username and password, and logged in'))
    .then(() => driver.wait(until.titleContains('Dashboard'), 30000)) // Increased timeout to 30 seconds
    .then(() => console.log('Navigated to Dashboard'))
    .then(() => driver.manage().window().setRect({ width: 1544, height: 980 }))
    .then(() => console.log('Set window size'))
    .then(() => driver.wait(until.elementLocated(By.css('.active > .label---layout-dark---dev---14s46')), 10000))
    .then(element => element.click())
    .then(() => console.log('Clicked on active label'))
    .then(() => driver.wait(until.elementLocated(By.linkText('Searches, reports, and alerts')), 10000))
    .then(element => element.click())
    .then(() => console.log('Clicked on "Searches, reports, and alerts"'))
    .then(() => driver.wait(until.elementLocated(By.css('.active > .link-label')), 10000))
    .then(element => element.click())
    .then(() => console.log('Clicked on active link label'))
    .then(() => driver.wait(until.elementLocated(By.linkText('JOHN_APP (John)')), 10000))
    .then(element => element.click())
    .then(() => console.log('Clicked on "JOHN_APP (John)"'))
    .then(() => driver.wait(until.elementLocated(By.linkText('New Report')), 10000))
    .then(element => element.click())
    .then(() => console.log('Clicked on "New Report"'))
    .then(() => driver.wait(until.elementLocated(By.id('control-view29013')), 10000))
    .then(element => element.click())
    .then(() => console.log('Clicked on element with id "control-view29013"'))
    .then(() => driver.wait(until.elementLocated(By.id('control-view29013')), 10000))
    .then(element => element.sendKeys('potato'))
    .then(() => console.log('Typed "potato"'))
    .then(() => driver.wait(until.elementLocated(By.css('.btn > .link-label')), 10000))
    .then(element => element.click())
    .then(() => console.log('Clicked on button with class "btn"'))
    .then(() => driver.wait(until.elementLocated(By.linkText('JOHN_APP (John)')), 10000))
    .then(element => element.click())
    .then(() => console.log('Clicked on "JOHN_APP (John)" again'))
    .then(() => driver.wait(until.elementLocated(By.linkText('Save')), 10000))
    .then(element => element.click())
    .then(() => console.log('Clicked on "Save"'))
    .catch(error => {
      console.error('An error occurred:', error);
    })
    .finally(() => {
      // You can choose whether or not to close the browser here
      // return driver.quit();
    });
}

loginAndPerformActions();
