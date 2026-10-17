const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let justCalculated = false;

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.textContent === "C") {
      display.value = "";
     } else if (button.textContent === "=") {
    try {
        if (display.value === "") {
            return;
        }

        let result = eval(display.value);

        if (!isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
            justCalculated = true;
        }

    } catch {
        display.value = "Error";
    }
    } else {
    if (justCalculated) {
        display.value = "";
        justCalculated = false;
    }

    let expression = display.value;
    let lastNumber = expression.split(/[+\-*/]/).pop();

    if (button.textContent === "." && lastNumber.includes(".")) {
        return;
    }

    display.value += button.textContent;
}
  });
});

document.addEventListener("keydown", function (event) {

    if (event.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

});