const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString (str){
    const regex = /[+-\s]/g;
}

// Regex can also take specific flags to alter the pattern matching behavior. Flags are added after the 
// closing /. The g flag, which stands for "global", will tell the pattern to continue looking after it has 
// found a match.