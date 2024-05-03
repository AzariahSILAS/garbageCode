const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", calculateTip);

function calculateTip() {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert("Please enter valid numbers.");
        return;
    }

    const tipAmount = (billAmount * tipPercentage) / 100;

    alert(`Tip Amount: $${tipAmount.toFixed(2)}`);
}