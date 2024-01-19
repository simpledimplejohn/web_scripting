// this script works from inside the all configurations page once logged in 
//  http://localhost:8000/en-US/account/login
// http://localhost:8000/en-US/manager/launcher/bulkreassign?app=John&owner=&count=100&offset=0&search=&appOnly=true&sortDir=&sortKey=&orphaned=false&configType=savedsearch

const nameArr1 = ['Another Alert', 'Customer alert', 'Still Another Alert']
const nameArr = ['Action Alert', 'Another Alert', 'Customer alert', 'Errors', 'More-Strange--* text ##', 'Still Another Alert', 'TEST', 'TEST ALERT', 'TEST ALERT ALERT', 'WEIrd 12345 "*THIS STUFF*" in here', 'potato']
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

// output: the elements with the name that matches the nameArr name
const matchNames = async (nameArr, existingNamesOnPage) => {
  const outputArr = []
  for (const name of nameArr) {
    let matchingCell = null
    for (const cell of existingNamesOnPage) {
      if (cell.innerText === name) {
        matchingCell = cell;
        outputArr.push(matchingCell)

      }
    }
  }
  return outputArr
}

const clickCheckBox = async (existingNamesOnPage) => {
  let elementsArr = []
  elementsArr = await matchNames(nameArr, existingNamesOnPage)

  for (const matchingCell of elementsArr) {
    const row = matchingCell.closest('tr');

    if (row) {
      const checkboxLink = row.querySelector(`a[role="checkbox"]`);
      if (checkboxLink) {
        console.log(`Checkbox link element for`, checkboxLink);
        checkboxLink.click();
      } else {
        console.log(`Checkbox link not found.`);
      }
    }
  }
}

const getNames = async (counter = 0) => {
  await waitFor();

  const table = document.querySelector('tbody');
  if (table) {
    const cell_names = document.querySelectorAll('td.cell-name');
    // console.log(cell_names);
    const cellElement = []
    for (const name of cell_names) {
      console.log("element ", name);
      cellElement.push(name);

    }
    console.log("td.cell-name", cellElement);
    return cellElement;
  } else {
    if (counter++ > 5) {
      return getNames(counter)
    }

    console.log("failed to find table after 5 tries")
  }

}

const main = async () => {
  let existingNamesOnPage = await getNames();

  console.log("main-existingNamesOnPage", existingNamesOnPage);

  let clickCheckBoxes = await clickCheckBox(existingNamesOnPage);
  clickCheckBoxes;
  // this returns the list of names
  console.log("end of main ")
}

main()

const nameArr = ['Action Alert', 'Another Alert', 'Customer alert', 'Errors', 'More-Strange--* text ##', 'Still Another Alert', 'TEST', 'TEST ALERT', 'TEST ALERT ALERT', 'WEIrd 12345 "*THIS STUFF*" in here', 'potato']
const mainAltVersion = async (alertsToClick) => {
  const waitFor = (time = 1000) => new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  })

  const getNames = async () => {
    for (let table, counter = 0; !table && counter < 5; counter++) {
      await waitFor();
      table = document.querySelector('tbody');
    }

    return document.querySelectorAll('td.cell-name');
  }

  const getRowIndexes = (cellElements) => {
    const indexes = [];
    cellElements.forEach((cell, i) => {
      if (alertsToClick.includes(cell.innerText)) {
        indexes.push(i);
      }
    });

    return indexes;
  }

  const clickCheckboxes = (rowIndexes) => {
    for (const index of rowIndexes) {
      const element = document.querySelector(`tbody tr:nth-child(${index + 1}) a[role="checkbox"]`);
      if (!element) { continue; }
      element.click();
    }
  }

  const elements = await getNames();
  const rowIndexes = getRowIndexes(elements);
  clickCheckboxes(rowIndexes)
}

mainAltVersion(nameArr)
