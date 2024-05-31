const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString (str){
    const regex = /[+-\s]/;
}

// The former pattern /\+-\s/ looked for +, -, and a space IN ORDER. This would match    +- hello
// but would not match     +hello.
// To tell the pattern to match each of these characters individually, you need to turn them into a 
// character class. This is done by wrapping the characters you want to match in brackets. For example, this 
// pattern will match the characters    h, e, l, OR o:
// const regex = /[helo]/;

// So, I wrapped my pattern in brackets to search for the +, -, and space individually. 
// NOTE:   I no longer need to escape the + character, because I am using a character class.