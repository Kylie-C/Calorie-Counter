const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str) { 
    const regex = /[+-\s]/g; 
    return str.replace(regex, "");
}

function isInvalidInput(str){
  const regex = /\d+e\d+/i; 
  return str.match(regex);
}

function addEntry(){ 
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
    const HTMLString = `<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>`;
}

// Gave my label element a for attribute (attributes go inside the <>'s) with the value X-#-name, where X is
// the value of the entryDropdown element (I have to add .value because it has numerous values stated in the
// HTML) and # is the value of entryNumber.
// Remember that HTML attributes should be wrapped in double quotes.