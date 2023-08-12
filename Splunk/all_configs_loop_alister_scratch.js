// this script works from inside the all configurations page once logged in 
//  http://localhost:8000/en-US/account/login
// http://localhost:8000/en-US/manager/launcher/bulkreassign?app=John&owner=&count=100&offset=0&search=&appOnly=true&sortDir=&sortKey=&orphaned=false&configType=savedsearch

const nameArr = ['Another Alert', 'Customer alert', 'Errors', 'More-Strange--* text ##', 'Still Another Alert']

// collect all the names from thier tags into an array 
// check that array against the provided array
  // loop through nameArr
  // find if that name is in the cell names we got from step 1
  // keep the index of that cell name
  // use that index in document.querySelector to find the right checkbox
    // i.e. something like: tbody.trow:nth-child(i).checkbox
// find the associated button to click
// click the button 

const waitFor = (time = 1000) => new Promise((resolve, reject) => {
  setTimeout(resolve, time);
})

const getNames = async (counter = 0) => {
  await waitFor();

  const table = document.querySelector('tbody');
  if (table) {
    const documentNames = document.querySelectorAll('td.cell-name');
    // console.log(documentNames);
    const alertNames = []
    for (const name of documentNames) {
      console.log(name.innerText);
      alertNames.push(name.innerText);

    }
    console.log(alertNames);
    return alertNames;
  } else {
    if (counter++ > 5) {
      return getNames(counter)
    }

    console.log("failed to find table")
  }

}

const main = async () => {
  let finished = await getNames();
  console.log(finished)
}

main()
/*
const getNames = async () => {
  const table = document.querySelector('tbody');
  if(table) {
    const documentNames = document.querySelectorAll('td.cell-name');
    // console.log(documentNames);
    const alertNames = []
    for(const name of documentNames) {
      console.log(name.innerText);
      alertNames.push(name.innerText);
  
    }
    console.log(alertNames);
  } else {
    console.log("failed to find table")
  }

}
getNames();
*/