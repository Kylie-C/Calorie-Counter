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

    const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]');
    const lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]');
    const dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]');
    const snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]');
    const exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]');

    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

    if (isError){
        return calculateCalories;
    }

    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
    const surplusOrDeficit = remainingCalories < 0 ? "Surplus" : "Deficit";
    
    output.innerHTML = ``;
}

// I need to construct the HTML string that will be displayed in the output element. I started by assigning 
// and empty template literal (remember template literals are back ticks ``, not apostrophes) to the 
// innerHTML property of the output element (remember I already selected the element at the top of this js 
// code with const output = document.getElementById('output');) on a new line at the end of the function.


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

