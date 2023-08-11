// this script works from inside the all configurations page once logged in 
//  http://localhost:8000/en-US/account/login
// http://localhost:8000/en-US/manager/launcher/bulkreassign?app=John&owner=&count=100&offset=0&search=&appOnly=true&sortDir=&sortKey=&orphaned=false&configType=savedsearch

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
  
    await clickAndWait('#control-view7097');
    await clickAndWait('#control-view7093');
    await clickAndWait('#control-view7088');
  
    console.log('Actions completed.');
  }
  
  performActions();