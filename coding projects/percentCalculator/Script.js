const percent = document.getElementById("percent");
const percent_of = document.getElementById("percent_of");
const equalss = document.getElementById("equals");

// function cal(a, b) {
//     let decimal = a / 100; 
//     let total = decimal * b;
//     return total;
// }
  
// console.log(cal(15, 230));
// console.log(percent);

function call(){
    let A = percent.value / 100;
    equalss.textContent = A * percent_of.value;
}
call()
