const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString (str){
}

// When users input their daily calorie budget, the input field will only accept numerical values. 
// However, if a number is entered with a + or - sign, I'll need to remove those characters. So, I declared
// a cleanInputString function that takes a str parameter.

// I know str = string, but I'm pretty sure 
// it's not a js thing, but a variable thing? And I haven't created the variable yet? I'll learn as we go on.

// NOTE: Values from an HTML input field are received as strings in js. I'll need to convert these strings into
// numbers before performing any calculations. Converting string values into numbers will be covered in a 
// future step.
