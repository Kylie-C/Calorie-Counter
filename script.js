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


// To see my new HTML content for the targetInputContainer, I will need to use the innerHTML property. The
// innerHTML property sets or returns the HTML content inside an element.

// Here is a form element with a label and input element nested inside:
    // <form id="form">
        // <label for="first-name">First name</label>
        // <input id="first-name" type="text">
    // </form>

// If I want to add another label and input element inside the form, then I can use the innerHTML property
// as shown below:

    // const formElement = document.getElementById("form");
    // const formContent = `
        // <label for="last-name">Last name</label>
        // <input id="last-name" type="text">
    // `;
    // formElement.innerHTML += formContent;

// So, I used the addition assignment operator += to append my HTMLString variable to 
// targetInputContainer.innerHTML