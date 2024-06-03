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
  const regex = /e/i;
}

// The e in a number input can also be an uppercase E. Regex has a flag for this, however - the i flag, 
// which stands for "insensitive".
// If the regex were    /Hello/i    it would match hello, Hello, HELLO, and even hElLo because of the i flag.
// This flag makes your pattern case-sensitive.