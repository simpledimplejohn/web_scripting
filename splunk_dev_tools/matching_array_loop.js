// this is the confusing loop made by chat gpt 
// it also has the logic for the matching array 

// this script works from inside the all configurations page once logged in 
//  http://localhost:8000/en-US/account/login
// http://localhost:8000/en-US/manager/launcher/bulkreassign?app=John&owner=&count=100&offset=0&search=&appOnly=true&sortDir=&sortKey=&orphaned=false&configType=savedsearch

const nameArr = ['Action Alert', 'Another Alert', 'Customer alert', 'Errors', 'More-Strange-- text ##', 'Still Another Alert', 'TEST', 'TEST ALERT', 'TEST ALERT ALERT', 'WEIrd 12345 "*THIS STUFF*" in here']
const nameArr2 = ['Action Alert', 'Another Alert', 'Customer alert', 'Errors','Still Another Alert', 'TEST', 'TEST ALERT', 'TEST ALERT ALERT']
const nameArr1 = ['Action Alert','Another Alert', 'Customer alert', 'Errors', 'Still Another Alert', 'TEST ALERT', 'TEST']


const array1 = [1, 2, 3, 4, 5];  // ariaLable
const array2 = [3, 4, 5, 6, 7];  // nameArr

const matchingItems = [];

for (const item1 of array1) {
  if (array2.includes(item1)) {
    matchingItems.push(item1);
  }
}

console.log("Matching items:", matchingItems);



// verbose version
async function performActions() {
  const waitFor = (selector) => new Promise((resolve, reject) => {
    console.log("wiatFor selector", selector)
    let attempts = 1
    const interval = setInterval(() => {
      if(attempts > 5 ) {
          clearInterval(interval);
          reject('too many attempts');
      }
      console.log(`trying to find element again, attempt: ${attempts++}`)
      console.log("wiatFor selector 2", selector)
      const element = document.querySelector(selector);
      console.log("wiatFor element", element)
      if (element) {
        clearInterval(interval);
        resolve(element);
      }
    }, 100);
  });

  const clickAndWait = async (selector) => {
    console.log("clickAndWait selector ", selector)
    const element = await waitFor(selector);
    console.log("clickAndWait element", element)
    element.click();
  };
  try {
    for (const name of nameArr) {
      const nameSelector = `[aria-label*="${encodeURIComponent(name)}"]`;
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
