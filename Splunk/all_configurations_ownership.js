// this script works from inside the all configurations page once logged in 
//  http://localhost:8000/en-US/account/login
// http://localhost:8000/en-US/manager/launcher/bulkreassign?app=John&owner=&count=100&offset=0&search=&appOnly=true&sortDir=&sortKey=&orphaned=false&configType=savedsearch

const nameArr1 = ['Action Alert','Another Alert', 'Customer alert', 'Errors', 'More-Strange--* text ##', 'Still Another Alert', 'WEIrd 12345 "*THIS STUFF*" in here']
const nameArr2 = ['Action Alert','Another Alert', 'Customer alert', 'Errors', 'Still Another Alert', 'TEST ALERT']
const nameArr = ['Action Alert','Another Alert', 'Customer alert', 'Errors', 'Still Another Alert', 'TEST ALERT', 'TEST']

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

  for (const name of nameArr) {
    const nameSelector = `[aria-label*="${encodeURIComponent(name)}"]`;
    console.log(`Clicking on element with aria-label: ${name}`);
    await clickAndWait(nameSelector);
    console.log('...');
  }

  console.log('All actions completed.');
}

performActions();
