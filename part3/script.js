const box = document.getElementById("box");

box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "lightcoral";
    box.textContent = "Mouse!";
});

box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "lightblue";
    box.textContent = "Where?";
});

const inputField = document.getElementById("inputField");
const output = document.getElementById("output");

inputField.addEventListener("keyup", () => {
    output.textContent = inputField.value;
});

function calculate(operator) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultField = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        resultField.textContent = "Need 2 numbers!";
        return;
    }

    let result;
    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : "You can not divide on 0!";
            break;
    }

    resultField.textContent = result;
}