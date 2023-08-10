// checkbox with array 
const arr = ["Action Alert", "Customer alert", "Errors", "potato"];

const cells = document.querySelectorAll('td.cell-name');

arr.forEach(name => {
  let found = false;

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

  if (!found) {
    console.log(`${name} not found`);
  }
});


const name = "Action Alert"
const checkbox = document.querySelector(`a.btn[aria-label*="${encodeURIComponent(name)}"]`);
console.log(checkbox)