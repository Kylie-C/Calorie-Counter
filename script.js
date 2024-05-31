const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString (str){
    const regex = /\+-\s/;
}

// In regex, shorthand character classes allow you to match specific characters without having to write those
// characters in your pattern. Shorthand character classes are preceded with a backslash \. NOTE that 
// the other backslash (\+) is used to escape something (the computer's meaning of +). 
// The character class \s will match any whitespace character, so I added this to my regex pattern.