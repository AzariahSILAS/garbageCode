const tital = document.getElementById('tital');
const titalInput = document.getElementById('tital-input');
const debtPaid = document.getElementById('debt-paid');
const debtPaidInput = document.getElementById('debt-paid-input');
const debtTotal = document.getElementById('debt-total');
const debtTotalInput = document.getElementById('debt-total-input');
const percentbar = document.getElementById('percentbar');
const btn = document.getElementById('btn');
const addBtn = document.getElementById('add-btn');


// -------end of variables----------------


function EditMode(){
    const allP = document.querySelectorAll('p');
    allP.forEach((p) => {
        p.style.display = 'none';
    });
    const inputElements = document.querySelectorAll('input');
    inputElements.forEach((input) => {
        input.style.display = 'inline-block';
    });
    btn.textContent = 'Save'
}

function viewMode(){
    const inputElements = document.querySelectorAll('input');
    const allP = document.querySelectorAll('p');
    let pIndex = 0;
    inputElements.forEach((input, index) => {
        input.style.display = 'none';

        if (allP[pIndex].textContent === 'Out Of') {
            pIndex++;
        }
        if (pIndex < allP.length) {
            allP[pIndex].textContent = input.value;
            pIndex++;
        }
    });
    allP.forEach((p) => {
        p.style.display = 'inline-block';
    });
    btn.textContent = 'Edit'
    function updatePercentBar() {
        const amountPaidValue = parseFloat(debtPaidInput.value);
        const totaldebtValue = parseFloat(debtTotalInput.value);
        const percentage = (amountPaidValue / totaldebtValue) * 100;
        percentbar.style.width = percentage + '%';
    }
    updatePercentBar()
}

function editFunction() {
   if (btn.textContent === 'Save') {
    viewMode()
   } else EditMode()
}

function addOuterBox() {
    const body = document.querySelector('body'); // Parent container
    const firstContainer = document.querySelector('.firstContainer'); // The outerBox to be duplicated

    // Create a clone of the innerBox
    const clonedfirstContainer = firstContainer.cloneNode(true);

    // Clear input values in the cloned innerBox
    const clonedInputElements = clonedfirstContainer.querySelectorAll('input');
    clonedInputElements.forEach((input) => {
        input.value = '';
    });

    // Append the cloned innerBox to the parent container
    firstContainer.appendChild(clonedfirstContainer);
}