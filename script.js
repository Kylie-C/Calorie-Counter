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
  const regex = /[0-9]+e[0-9]+/i;
}

// The + modifier in a regex allows you to match a pattern that occurs one or more times. To match my digit
// pattern one or more times, I added a plus after each of the digit characters. 
// As of now, I don't fully understand why this is needed for this calorie counter. 