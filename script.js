function calculate() {
    const first_operand = document.getElementById("operand1");
    const second_operand = document.getElementById("operand2");
    const operator = document.getElementById("operator").value;
    const first_number = parseFloat(first_operand.value);
    const second_number = parseFloat(second_operand.value);

    const prev_result_field = document.getElementById("previous");
    const result_field = document.getElementById("current");
    if (isNaN(first_number)) {
        first_operand.classList.add("error-input");
        result_field.innerHTML = "Введите число";
        return;
    }
    if (isNaN(second_number)) {
        second_operand.classList.add("error-input");
        result_field.innerHTML = "Введите число";
        return;
    }

    let result;
    switch(operator) {
        case "+":
            result = first_number + second_number;
            break;
        case "-":
            result = first_number - second_number;
            break;
        case "*":
            result = first_number * second_number;
            break;
        case "/":
            if (Math.abs(second_number) < Number.EPSILON) {
                second_operand.classList.add("error-input");
                result_field.innerHTML = "Деление на 0";
                return;
            }
            result = first_number / second_number;
            break;
    }
    first_operand.classList.remove("error-input");
    second_operand.classList.remove("error-input");
    prev_result_field.innerHTML = result_field.innerHTML;
    result_field.innerHTML = `${first_number} ${operator} ${second_number} = ${result}`;
}