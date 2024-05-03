const savings = document.getElementById('savings');
const amountPaid = document.getElementById('amountPaid');
const formField = document.querySelector('.formField');
const totalCost = document.getElementById('totalCost');
const leftToSpend = document.getElementById('leftToSpend');
const editBtn = document.getElementById('editBtn');

// ------------------variables --------------------------


function editMode() {
    totalCost.style.display = 'none';
    formField.style.display = 'inline-block';
    editBtn.textContent = 'Save';  
}

function viewMode() {
    const formValue = formField.value;
    totalCost.style.display = 'inline-block';
    totalCost.textContent = formValue;
    formField.style.display = 'none';
    editBtn.textContent = 'Edit';
     
}

editBtn.addEventListener('click', function(){
    if (editBtn.textContent === 'Edit') {
          viewMode();
    } else {
          editMode();
    }
});

