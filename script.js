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

console.log(isInvalidInput("10"))

// The former console output showed as ['1e3, index: 0, input: '1e3', groups: undefined]
// '1e3' is the matched value against the /\d+e\d+/i regex.
// index:0 is the index of the matched value in the string (it's the first thing in the index).
// input: '1e3' is the original string that was matched.
// groups: undefined are the matches groups, which are not used in this case. I'll learn more about groups in 
    // a later project.

// Now I'm testing for a valid input, so I updated the console statement to the following.
    // The console returns "null", which means no match is found. In this case, the isInvalidInput function 
    // should return null when the input is a valid number WITHOUT any scientific notation.
// Null in JS is a special primitive that represents the intentional absence of a value. In a boolean context,
// null is considered falsy which evaluates to false in a conditional statement.
