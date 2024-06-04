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
}

// Each entry will have a text input for the entry's name, and a number input for the calories. To get a count
// of the number of entries (how many times the user inputs?), I can query by text inputs. 
    // NOTE: you cannot query by number inputs, as you have an extra number input for the user's calori 
    // budget.

// I padded the string 'input[type="text"]' to the querySelectorAll() method. I had to use single quotes
// for my string, so that I could use the double quotes within it.

// This will return a NodeList of all the text inputs in the form. I then accessed the length property
// of the NodeList (I did this by adding '.length' to the end of the querySelectorAll() method) to get
// the number of entries.