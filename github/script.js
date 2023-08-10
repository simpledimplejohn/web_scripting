// Find all td elements with class "cell-name"
const cellNameElements = document.querySelectorAll('td.cell-name');

// Iterate through the elements to find the one containing "Action Alert"
let targetRow;
cellNameElements.forEach(cell => {
  if (cell.textContent.includes('Action Alert')) {
    targetRow = cell.closest('tr');
  }
});

if (targetRow) {
  // Find the checkbox within the target row
  const checkbox = targetRow.querySelector('a.btn[aria-label="/servicesNS/nobody/John/saved/searches/Action%20Alert"] .icon-check');

  if (checkbox) {
    // Toggle the checkbox by changing its display style
    checkbox.style.display = checkbox.style.display === 'none' ? 'inline' : 'none';

    // Update the "aria-checked" attribute
    const isChecked = checkbox.style.display === 'inline';
    checkbox.parentElement.setAttribute('aria-checked', isChecked.toString());
  }
}

const arr = ["Action Alert", "Customer alert", "Errors", "potato"]