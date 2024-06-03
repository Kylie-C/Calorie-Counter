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
  const regex = /[0-9]e[0-9]/i;
}

// Number inputs only allow the e (exponent) to occur between two digits. To match any number, you can use
// the character class [0-9]. This will match any digit between 0 and 9.
// I added this character class before and after e in my pattern. This is specifying what the two digits can
// be. The first must be between 0-9, and the second as well. So no 11e.31.