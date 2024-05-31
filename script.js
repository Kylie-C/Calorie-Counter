const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

// In programming, prefixing a variable with IS or HAS is a common practice to signify that the variable
// represents a boolean value (true = on, false = off). Some examples:
// let isRunning = true;          boolean is on
// let hasCompleted = false;      boolean is off

// I created the boolean variable isError and set it = false. Using LET means the variable can be reassigned 
// later on.     Later in this project, I'll update the value of isError is the user provides an invalid
// input.