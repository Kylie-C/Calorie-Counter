const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str) {  //The "str" is computer language and literally represents an empty string.
    // It is not named string.
    const regex = /[+-\s]/g; 
    // regex in this instance is both a variable storing the data (so I learn what it is) and a name for the 
    // thing it does, but it's ACTUALLY just what's within the // (including the g for global).
    return str.replace(regex, "");
    //Functions have to return variables that live within the function, so it needs to
    // be within the function. Return CAN'T be outside of the {}.
    // Also in this line, the str.replace(regex, "") is both a function (does something) and variable
    // (stores the result). So here I'm stating what it needs to do (replace regex with an empty string)
    // and returning the value or the function STORED within the "variable".
    // **ALSO returns will ALWAYS be the last thing in a function. If I wanted to console.log() the
    // str.replace(regex, ""), it would need to go right above the return statement.
  }

// Functions SHOULD always have more than one reason for existing (function lol), so the parameter needs to
// be generic. With the parameter of this function being str, that's an empty string and doesn't exist, so
// it won't acutally work (so later in this project we will fix it). But what this means is a paramenter can't
// be like number = 0 or "tomato" because that only gives the function one function.

