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

console.log(isInvalidInput("1e3"))

// Testing my isInvalidInput function. I want to check if the function can detect scientific notation like 
// 1e3 or 10e2. While this is a valid way to represent numbers, it's not a valid input for my calorie
// counter project. 
// The console.log() must go outside and below the function itself to test it.

// The console output shows as ['1e3, index: 0, input: '1e3', groups: undefined]