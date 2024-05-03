const firstBlock = document.getElementById("firstBlock");
const textInput = document.getElementById("textInput")
let notesArray = [];    //not being used yet



function addNote() {
    let paragraph = document.createElement("p");

    

    paragraph.textContent = textInput.value;
    
    firstBlock.appendChild(paragraph);
    
    textInput.value = "";
}

// ----------------Second Block----------
const secondBlock = document.getElementById("secondBlock");
const secondBlockInput = document.getElementById("secondBlockInput");
const secondBlockBtn = document.getElementById("secondBlockBtn");
let state = "askingName"
let yourName, hoursWorked, breakTime;



function addHours() {

    if(state === "askingName") {
        yourName = secondBlockInput.value;
        secondBlockInput.type = "number";
        secondBlockInput.value = "";
        secondBlockInput.placeholder = "how many hours did you work?";
        state = "askingHoursWorked";
    }else if(state === "askingHoursWorked") {
        hoursWorked = parseFloat(secondBlockInput.value);
        secondBlockInput.type = "number";
        secondBlockInput.value = "";secondBlockInput.placeholder = "how long was your break?";
        state = "askingBreakTime";
    }else if (state === "askingBreakTime") {
        breakTime = parseFloat(secondBlockInput.value);
        secondBlockInput.type = "text";
        secondBlockInput.value = "";
        secondBlockInput.placeholder = "whats your name?";
        state = "askingName"

        let val = hoursWorked - breakTime;

    

    const payableHours = document.createElement("p");

    payableHours.textContent = yourName + " has " + val + " hours worked ";

    secondBlock.appendChild(payableHours)

    }
}
