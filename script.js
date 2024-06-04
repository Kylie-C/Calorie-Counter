const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
// Here's where I queried it!
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
    const targetId = "#" + entryDropdown.value;
}

// I need to know which category the entry goes in. Luckily, I added a dropdown for the user to select a 
// category. Earlier, I queried (linked?) that dropdown earlier in your JS and assigned it to the 
// entryDropdown button. I can use the .value property to get the value of the selected option.

// I used concatenation to add a # to the beginning of the .value property of entryDropdown, and assigned
// that result to a targetId variable.
// Sing the "#" is a string, I imagine it will show as #USER-SELECTION (e.g., #Breakfast).
