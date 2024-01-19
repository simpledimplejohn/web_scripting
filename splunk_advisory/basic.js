let elements = Array.from(document.querySelectorAll('td.advisory-td')).filter(td => td.textContent.trim() === 'Critical');
console.log(elements)

// Assuming you have jQuery loaded
$(document).ready(function() {
    // Select the element with 'Critical' severity
    var criticalElement = $("td.advisory-td:contains('Critical')");

    // Do something with the selected element
    console.log(criticalElement.text());
});