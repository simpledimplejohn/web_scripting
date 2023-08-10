// this script works from inside the all configurations page once logged in 

async function performActions() {
    const waitFor = (selector) => new Promise(resolve => {
      const interval = setInterval(() => {
        const element = document.querySelector(selector);
        if (element) {
          clearInterval(interval);
          resolve(element);
        }
      }, 100);
    });
  
    const clickAndWait = async (selector) => {
      const element = await waitFor(selector);
      element.click();
    };
  
    await clickAndWait('#control-view7253');
    await clickAndWait('#control-view7257');
    await clickAndWait('#control-view7261');
  
    console.log('Actions completed.');
  }
  
  performActions();