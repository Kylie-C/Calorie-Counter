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
    const HTMLString = `<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
        <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
        <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>`;
}


// I created another label element (on a new line) at the end of my HTMLString (again, note where the closing
// backtick ` is for the template literal). This label should have the text "Entry # Calories", using your 
// template literal syntax to replace # with the value of entryNumber, and the for attribute set to
// X-#-calories, where X is the value of entryDropdown and # is the value of entryNumber.