function convertTemperature() {
    let temperature = parseFloat(document.getElementById('inputValue').value);
    let unit = document.getElementById('inputUnit').value;
    let result;

    if(isNaN(temperature)) {
        document.getElementById('output').textContent = 'please enter a valid number';
        return;

    }

    if (unit === 'C') {
        result = (temperature * 9/5) + 32;
        document.getElementById('output').textContent = temperature + '°C is' + result.toFixed(1) + '°F';
    } else {
        result = (temperature - 32) * 5/9;
        document.getElementById('output').textContent = temperature + '°F is ' + result.toFixed(1) + '°C';
    }
}
