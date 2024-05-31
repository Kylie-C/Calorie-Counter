const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString (str){
    const regex = /\+-/;
}

// The former /hello/ matched the exact text "hello", which was not the desired behavior. Instead, I want 
// to search for +, -, or spaces. I replaced the /hello/ in my regex variable with \+- to match plus and 
// minus characters.

// NOTE: I needed to use the backslash \ character to escape the + symbol because it has a special meaning
// in regular expressions.