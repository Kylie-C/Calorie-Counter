const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString (str){
    const regex = /hello/;
}

// To match specific characters in a string, you can use Regular Expressions or "regex" for short (Notice the
// color of it is darker than const or let variables).
// Regex in JS is indicated by a pattern wrapped in forward slashes. The example above matches the 
// string literal "hello".
// In future steps, I'll update this regex pattern to match specific characters needed for the calorie
// counter.