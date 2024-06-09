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

function addEntry(){ 
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
    const HTMLString = `
        <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
        <input 
            type="text" 
            id="${entryDropdown.value}-${entryNumber}-name" 
            placeholder="Name"
        />
        <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>;
        <input 
            type="number" 
            min="0" 
            placeholder="Calories" 
            id="${entryDropdown.value}-${entryNumber}-calories"
        />`;
        targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

function getCaloriesFromInputs(list){
    let calories = 0;
    for (const item of list) {
    }
}

// The list parameter is going to be the result of a query selector, which will return a NodeList. A NodeList
// is a list of elements like an array. It contains the elements that match the query selector. I will need
// to loop through these elements in the list.

// In previous steps, I learned how to loop through an array using a for loop. I can also use a for...of loop
// to loop through an array AND a NodeList.

// A for...of loop is used to iterate (repeat a set of instructions) over elements in an iterable object 
// like an array. The variable declared in the loop represents the current element being iterated over.

    // for (const element of elementArray){
        // console.log(element);
    // }

// I created a for...of loop that loops through the list. For the loop's variable name, I used const to declare
// a variable called item.

addEntryButton.addEventListener("click", addEntry);

