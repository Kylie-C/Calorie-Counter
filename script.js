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
    const targetId = "#" + entryDropdown.value;
// # = ID
// entryDropdown is an ID element in HTML with value options of: breakfast, lunch, dinner, snacks, exercise.
    const targetInputContainer = document.querySelector(targetId + ' .input-container');
// Once the targetId has been selected, it'll be followed by ' .input-container'. Not sure why 
// it needs a space before the .input-container, as this looks like it'll show as a string?
}

// Now I need to target the .input-container element (look in HTML) element WITHIN the element that has your 
// targetId (the user will select it [breakfast, lunch, etc] and that targetId will determin which 
// .input-container I'm targeting).
// I declared a new targetInputContainer variable, and assigned it the value of document.querySelector() 
// (this method returns the first element within the document that matches the specified selector, or group
// of selectors. If no matches are found, null is returned). 
// I used concatenation to seperate targetId and ' .input-container' and passed that string to querySelector().

// Not sure why it needs a space before the .input-container, as this looks like it'll show as a string?
