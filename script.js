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

function calculateCalories(e){
    e.preventDefault();
    isError = false;
}

// I will be attaching this function to the submit event of the form (see in HTML). The submit event is 
// triggered when the form is submitted (sounds obvious enough). The default action of the submit event is 
// to reload the page. I need to prevent this default action using the preventDefault() method of my 
// e parameter.

// I added a line to my calculateCalories function that calls the preventDefault() method on the e 
// parameter. Then, I reset my global error flag (which I declared at the top as isError) to false. I'm not
// really sure why I need to declare the global error flag isError to false when that what I had stated 
// at the top. Prehaps it's because I declared it with let?

function getCaloriesFromInputs(list){
    let calories = 0;

    for (const item of list) {
        const currVal = cleanInputString(item.value);
        const invalidInputMatch = isInvalidInput(currVal);

        if (invalidInputMatch) {
            alert(`Invalid Input: ${invalidInputMatch[0]}`)
            isError = true;
            return null;
        }

        calories += Number(currVal);
    }

    return calories;
}

addEntryButton.addEventListener("click", addEntry);

