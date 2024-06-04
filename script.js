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
    const entryNumber = targetInputContainer.querySelectorAll();
}

// I will want to number the entries a user adds. To get all of the number inputs, I used the 
// querySelectorAll() method.

// The querySelectorAll() method returns a NodeList of all the elements that match the selector. A NodeList
// is an array-like object, so I can access the elements using bracket notation.

// I declared an entryNumber variable and gave it the value of targetInputContainer.querySelectorAll(). I 
// don't need to pass an argument to the query selector yet.