const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str) { 
    console.log("original string: ", str);
    const regex = /[+-\s]/g; 
    return str.replace(regex, "");
  }

  console.log(cleanInputString("+-99"))
//  To see the results from the cleanInputString function, I needed to add a console.log() statement outside
// of th function. Inside that console statement, I called the cleanInputString function with the string value
// of "+-99" as an argument. By placing the "+-99" in place of the "str" in the console.log() statement,
// I'm telling the computer that "+-99" IS str, which is why +-99 replaces all instances of str when it's
// being run. 
// When I open the console, I see the first console.log() show "original string: +-99" and the second
// console.log() show "99", with the +- removed.