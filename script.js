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

function isInvalidInput(str){}
  const regex = /e/;

// I declared a regex variable (again, regex is the NAME of this variable and COULD be named anything. I'm
// just naming it regex to help me understand what the // is [it's the actual regex]) and assigned it a 
// regex that matches the character e, which means exponent"