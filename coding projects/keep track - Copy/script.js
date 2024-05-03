const savings = document.getElementById('savings');
const savingsInput = document.getElementById('savingsInput');
const totalP = document.getElementById('totalP');
const titalInput = document.getElementById('titalInput');
const amountPaid = document.getElementById('amountPaid');
const apInput = document.getElementById('apInput');
const formField = document.querySelector('.formField');
const totalCost = document.getElementById('totalCost');
const leftToSpend = document.getElementById('leftToSpend');
const editBtn = document.getElementById('editBtn');
const percentBar = document.getElementById('percent-bar');

function editMode() {
  savings.style.display = 'none';
  savingsInput.style.display = 'inline-block';
  
  totalP.style.display = 'none';
  amountPaid.style.display = 'none';
  titalInput.style.display = 'inline-block';
  apInput.style.display = 'inline-block';

  totalCost.style.display = 'none';
  formField.style.display = 'inline-block';

  editBtn.textContent = 'Save';
}

function viewMode() {
  savingsInput.style.display = 'none';
  savings.style.display = 'inline-block';
  savings.textContent = '$' + parseFloat(savingsInput.value).toFixed(2);
  
  totalP.textContent = titalInput.value;
  amountPaid.textContent = '$' + parseFloat(apInput.value).toFixed(2);
  titalInput.style.display = 'none';
  apInput.style.display = 'none';
  totalP.style.display = 'inline-block';
  amountPaid.style.display = 'inline-block';

  totalCost.textContent = '$' + parseFloat(formField.value).toFixed(2);
  totalCost.style.display = 'inline-block';
  formField.style.display = 'none';

  if (totalCost.textContent === '$') {
    totalCost.textContent = '$0.00';
  }

  editBtn.textContent = 'Edit';
}

function updateLeftToSpend() {
  const apValue = parseFloat(apInput.value) || 0;
  const totalCostValue = parseFloat(totalCost.textContent.slice(1)) || 0;
  const leftToSpendValue = parseFloat(savingsInput.value) - apValue;
  leftToSpend.textContent = '$' + leftToSpendValue.toFixed(2);
}

function percentbar() {
  const amountPaidValue = parseFloat(apInput.value) || 0;
  const totalCostValue = parseFloat(totalCost.textContent.slice(1)) || 0;
  const percentage = (amountPaidValue / totalCostValue) * 100;
  percentBar.style.width = percentage + '%';
}

editMode();

editBtn.addEventListener('click', function() {
  if (editBtn.textContent === 'Edit') {
    editMode();
  } else {
    viewMode();
  }

  if (apInput.value !== formField.value) {
    updateLeftToSpend();
  } else {
    leftToSpend.textContent = '$0.00';
  }

  percentbar();
});

apInput.addEventListener('input', function() {
  if (editBtn.textContent === 'Save') {
    updateLeftToSpend();
    percentbar();
  }
});