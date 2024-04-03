document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    let currentOperand = '';
    let previousOperand = '';
    let currentOperator = null;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (button.classList.contains('number')) {
                appendNumber(button.textContent);
            } else if (button.classList.contains('operator')) {
                setOperator(button.textContent);
            } else if (button.id === 'clear') {
                clear();
            } else if (button.id === 'equal') {
                compute();
            }
            updateDisplay();
        });
    });

    function appendNumber(number) {
        currentOperand += number;
    }

    function setOperator(operator) {
        if (currentOperand === '') return;
        if (previousOperand !== '') {
            compute();
        }
        currentOperator = operator;
        previousOperand = currentOperand;
        currentOperand = '';
    }

    function compute() {
        let result;
        const prev = parseFloat(previousOperand);
        const current = parseFloat(currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (currentOperator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }
        currentOperand = result.toString();
        currentOperator = null;
        previousOperand = '';
    }

    function clear() {
        currentOperand = '';
        previousOperand = '';
        currentOperator = null;
    }

    function updateDisplay() {
        display.textContent = currentOperand;
    }
});
