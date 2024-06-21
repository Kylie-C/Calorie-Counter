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
}

// I need to know if the user is in a caloric surplus or deficit. A caloric surplus is when you consume more
// calories than you burn, and a caloric deficit is when you burn more calories than you consume. Burning as 
// many calories as you consume is called maintenance, and you can be thought of as a surplus or deficit of 0,
// depending on your goals.

// I declared a surplusOrDeficit variable. Then used a ternary operator (I'll explain at the end) to set 
// surplusOrDeficit to the string "Surplus" or "Deficit" depending on whether remainingCalories is less than 0
// (remainingCalories < 0). If it is less than 0, then surplusOrDeficit should be "Surplus". Otherwise, it 
// should be "Deficit".

// The ternary operator in JS is a shorthand for the if-else statement. It's called the ternary operator
// because it takes 3 operands: a condition, an expression to execute if the condition is true, and an
// expression to execute if the condition is false.

    // condition ? expressionIfTrue : expressionIfFalse;

// An example:
    // let age = 18;
    // let canVote = age >= 18 ? "Yes, you can vote!" : "No, you cannot vote yet.";
    // console.log(canVote); // Output: "Yes, you can vote!"


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

