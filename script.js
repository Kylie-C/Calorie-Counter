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
  const regex = /\d+e\d+/i; //"regex" is the variable name. The actual regex is /\d+e\d+/i, where i is 
  //insensitive to capitalizations.
  return str.match(regex);
}

// Strings have a .match() method, which takes a regex argument. .match() will return an array of match results
// - containing either the first match, or all matches if the global flag is used.
// Example:
// const str = 'example string';
// const regex = /example/;
// const result = str.match(regex);   //Returns ['example']. But idk why const is on this line? It doesn't
    // need to be in my code.

// In my code, I returned the result of calling the .match() method on str and passed my regex variable as
// the argument. I'll use this match result later on.