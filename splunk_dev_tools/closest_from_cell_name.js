// this version will only work virtually 
// but it does find the cell name closests 
const nameArr1 = ['Action Alert', 'Another Alert', 'Customer alert', 'Errors', 'Still Another Alert', 'TEST', 'TEST ALERT', 'TEST ALERT ALERT'];
const nameArr = ['Action Alert', 'Another Alert', 'Customer alert', 'Errors', 'More-Strange--* text ##', 'Still Another Alert', 'TEST', 'TEST ALERT', 'TEST ALERT ALERT', 'WEIrd 12345 "*THIS STUFF*" in here']

const findAndClickCheckbox = async () => {
  for (const name of nameArr) {
    // Find all cells with the class 'cell-name'
    const nameCells = document.querySelectorAll('td.cell-name');

    // Loop through the cells and find the one with the matching name
    let matchingCell = null;
    for (const cell of nameCells) {
      if (cell.textContent.trim() === name) {
        matchingCell = cell;
        break;
      }
    }

    if (matchingCell) {
      // Navigate to the parent <tr> element
      const row = matchingCell.closest('tr');

      if (row) {
        // Find the checkbox <a> tag with the role "checkbox"
        const checkboxLink = row.querySelector(`a[role="checkbox"]`);

        if (checkboxLink) {
          console.log(`Checkbox link element for ${name}:`, checkboxLink);
          // Click the checkbox link if needed
          // checkboxLink.click();
        } else {
          console.log(`Checkbox link not found for ${name}.`);
        }
      } else {
        console.log(`Row not found for ${name}.`);
      }
    } else {
      console.log(`Cell with name ${name} not found.`);
    }
  }
};

findAndClickCheckbox();



/*
const cells = document.querySelectorAll('td.cell-name');
cells.forEach(cell => {
  if (cell.textContent.includes(name)) {
    const row = cell.closest('tr');
    const checkbox = row.querySelector(`a.btn[aria-label*="${encodeURIComponent(name)}"] .icon-check`);
    if (checkbox) {
      checkbox.style.display = checkbox.style.display === 'none' ? 'inline' : 'none';
      checkbox.parentElement.setAttribute('aria-checked', (checkbox.style.display === 'inline').toString());
    }

    found = true;
  }
});
*/
