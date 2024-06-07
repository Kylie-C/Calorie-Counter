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
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
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
        targetInputContainer.innerHTML += HTMLString;
}

addEntryButton.addEventListener("click", addEntry);

// In the Role Playing Game project, I learned how to set a button's behavior by editing its onclick
// property. I can also edit an element's behavior by adding an event listener. The following example
// uses the addEventListener method to add a click to a button. When the button is clicked, the printName
// function is called.

//     <button class="btn">Print name</button>
//     const button = document.querySelector('.btn');
//     function printName() {
//       console.log("Jessica");
//     }
//     button.addEventListener('click', printName);

// The addEventListener method takes two arguments. The first is the event to listen to (Eg., 'click'). The
// 2nd is the callback function, or the function that runs when the event is triggered.

// So, I called the addEventListener() method on the addEntryButton (variable declared on line 4). I passed
// in the string "click" for the 1st argument and the addEntry function for the second argument.

// NOTE that I should not CALL addEntry, but pass the variable (or function reference) directly.