// not userful, finds by aria-lable
// this loops through all 
// checks box but does not work 
// 
const findAndClickCheckboxes = async () => {
  const nameArr2 = ["Action Alert", "Customer alert", "Errors", "potato"];
  const nameArr = ['Action Alert', 'Another Alert', 'Customer alert', 'Errors', 'Still Another Alert', 'TEST', 'TEST ALERT', 'TEST ALERT ALERT'];

  // Find all cells with the class 'cell-name'
  const nameCells = document.querySelectorAll('td.cell-name');

  for (const name of nameArr) {
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
        // Find the checkbox icon element
        const checkboxIcon = row.querySelector(`a.btn[aria-label*="${encodeURIComponent(name)}"] .icon-check`);

        if (checkboxIcon) {
          // Toggle the visibility of the checkbox icon
          checkboxIcon.style.display = checkboxIcon.style.display === 'none' ? 'inline' : 'none';
          // Update aria-checked attribute
          checkboxIcon.parentElement.setAttribute('aria-checked', (checkboxIcon.style.display === 'inline').toString());

          console.log(`Checkbox for ${name} toggled:`, checkboxIcon.parentElement);
        } else {
          console.log(`Checkbox icon not found for ${name}.`);
        }
      } else {
        console.log(`Row not found for ${name}.`);
      }
    } else {
      console.log(`Cell with name ${name} not found.`);
    }
  }
};

findAndClickCheckboxes();
