const output = document.getElementById("workwindow");
const numButtons = document.getElementsByClassName("numButtons");
const reset = document.getElementById("ac");
const result = document.getElementById("result");
const signs = document.querySelectorAll(".sign");
const negative = document.querySelector("#negative");
const percent = document.querySelector("#percent");
const float = document.querySelector("#float");


let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;


for (let i = 0; i < numButtons.length; i++){
numButtons[i].addEventListener("click", (e) =>{
    let atr = e.target.getAttribute('value');
    if (isFirstValue === false){
        getFirstValue(atr);
    }
    else if (isSecondValue === false){
        getSecondValue(atr)
    }
})
}

function getFirstValue(el) {
    output.textContent = "";
    if (firstValue.length == 11) {
        
    }
    if (el === '.' && firstValue.toString().includes('.')) {
        return;
    }
    firstValue += el;
    output.textContent = firstValue;
}

function getSecondValue(el) {
    output.textContent = "";
    if (el === '.' && secondValue.toString().includes('.')) {
        return;
    }
    if (firstValue != "" && sign != "") {
        secondValue += el;
        output.textContent = secondValue;
    }
}

function getSign() {
    for (let i = 0; i < signs.length; i++){
        signs[i].addEventListener("click", (e) =>{
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}
getSign();

result.addEventListener('click', () => {
    output.textContent = "";
    if (sign === '+') {
        resultValue = parseFloat(firstValue) + parseFloat(secondValue);
    } else if (sign === '-') {
        resultValue = parseFloat(firstValue) - parseFloat(secondValue);
    } else if (sign === '*') {
        resultValue = parseFloat(firstValue) * parseFloat(secondValue);
    } else if (sign === '/') {
        resultValue = parseFloat(firstValue) / parseFloat(secondValue);
    }
    output.textContent = resultValue;
    firstValue = resultValue.toString();
    secondValue = "";       
})

negative.addEventListener('click', () => {
    output.textContent = "";
    if (firstValue != ""){
        resultValue = -firstValue;
        firstValue = resultValue;
    }
    if (firstValue != "" && secondValue != "" && sign != ""){
        resultValue = -resultValue;
    }
    output.textContent = resultValue;
})

percent.addEventListener('click', () =>{
    output.textContent = "";
    if (firstValue != ""){
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }
    if (firstValue != "" && secondValue != "" && sign != ""){
        resultValue = resultValue / 100;
    }
    output.textContent = resultValue;
})

reset.addEventListener('click', ()=>{
    output.textContent = "0";
    firstValue = "";
    isFirstValue = false;
    secondValue = "";
    isSecondValue = false;
    sign = "";
    resultValue = 0;

})
function checkResultLength() {
    const resultString = resultValue.toString();
    if (resultString.includes('.')) {
        const [integerPart, decimalPart] = resultString.split('.');
        if (integerPart.length >= 6) {
            result.textContent = resultValue.toFixed(6 - decimalPart.length);
        } else {
            result.textContent = resultValue;
        }
    } else if (resultString.length >= 8) {
        result.textContent = resultValue.toFixed(5);
    } else {
        result.textContent = resultValue;
    }
}

float.addEventListener('click', () => {
    if (isFirstValue === false) {
        if (!firstValue.includes('.')) {
            firstValue += '.';
            output.textContent = firstValue;
        }
    } else if (isSecondValue === false) {
        if (!secondValue.includes('.')) {
            secondValue += '.';
            output.textContent = secondValue;
        }
    }
});

function disableNumberButtons() {
    for (let i = 0; i < numButtons.length; i++) {
        numButtons[i].disabled = true;
    }
}