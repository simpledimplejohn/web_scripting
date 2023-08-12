// this script works from inside the all configurations page once logged in 
//  http://localhost:8000/en-US/account/login
// http://localhost:8000/en-US/manager/launcher/bulkreassign?app=John&owner=&count=100&offset=0&search=&appOnly=true&sortDir=&sortKey=&orphaned=false&configType=savedsearch

const nameArr = ['Another Alert', 'Customer alert', 'Errors', 'More-Strange--* text ##','Still Another Alert']
const nameArr2 = ['Action Alert','Another Alert', 'Customer alert', 'Errors', 'Still Another Alert', 'TEST ALERT']
const nameArr1 = ['Action Alert','Another Alert', 'Customer alert', 'Errors', 'Still Another Alert', 'TEST ALERT', 'TEST']

async function performActions() {
  const waitFor = (alertName) => new Promise((resolve, reject) => {
    let attempts = 1
    const interval = setInterval(() => {
      if(attempts > 5 ) {
          clearInterval(interval);
          reject('too many attempts');
      }
      console.log(`trying to find element again, attempt: ${attempts++}`)
      const cells = document.querySelectorAll('td.cell-name');
      // ['Another Alert', 'my weird alert text', 'some other table alert']
      // objective, have the text available as a variable
      // find cell with the text that matches alertName
      for(const cell of cells) {
        
      }

      if (element) {
        clearInterval(interval);
        resolve(element);
      }
    }, 100);
  });

  const clickAndWait = async (alertName) => {
    const element = await waitFor(alertName);
    element.click();
  };

  try {
    for (const name of nameArr) {
      const nameSelector = name;
      console.log(`name output ${nameSelector}`);
      await clickAndWait(nameSelector);
      console.log('...');
    }
  } catch (error) { 
      console.log(error)
  }
  console.log('All actions completed.');
}

performActions();
