const name = "Action Alert"

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
