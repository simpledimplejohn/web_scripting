// a starting point to rebuild this from scratch using Alisters method
// this script works from inside the all configurations page once logged in 
//  http://localhost:8000/en-US/account/login
// http://localhost:8000/en-US/manager/launcher/bulkreassign?app=John&owner=&count=100&offset=0&search=&appOnly=true&sortDir=&sortKey=&orphaned=false&configType=savedsearch

const nameArr1 = ['Another Alert', 'Customer alert', 'Errors', 'More-Strange--* text ##','Still Another Alert']
const nameArr2 = ['Action Alert','Another Alert', 'Customer alert', 'Errors', 'Still Another Alert', 'TEST ALERT']
const nameArr = ['Action Alert','Another Alert', 'Customer alert', 'Errors', 'Still Another Alert', 'TEST ALERT', 'TEST']

// collect all the names with tags

// wait for load
const waitFor = function(time = 1000) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve();
    }, time);
  });
};

// click the check box
const checkbox = async function (nameArr) {
  for (const name of nameArr) {
    const nameSelector = name 
    await waitFor()
    console.log(nameSelector)
  }
}


const main = function async () {
  checkbox(nameArr);
  console.log("potato")
}

main()
