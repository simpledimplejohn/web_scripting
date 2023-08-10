const { Builder, By, Key, until } = require('selenium-webdriver');

function searchOnGoogle() {
  // Create a new instance of the browser
  const driver = new Builder().forBrowser('firefox').build(); // 'firefox' can be replaced with 'chrome' if using Chrome

  // Navigate to Google
  driver.get('https://www.google.com')
    .then(() => {
      // Find the search input element and type 'potato'
      return driver.findElement(By.name('q')).sendKeys('potato', Key.RETURN);
    })
    .then(() => {
      // Wait for search results to load
      return driver.wait(until.titleContains('potato'), 5000);
    })
    .then(() => {
      // Print the title of the search results page
      return driver.getTitle();
    })
    .then(title => {
      console.log('Search results page title:', title);
      
      // Wait for 30 seconds
      return new Promise(resolve => setTimeout(resolve, 30000));
    });
}

searchOnGoogle();
