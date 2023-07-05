const userInput = document.getElementById("userInput");

var expression = '';

function press(num){
    expression += num;
    userInput.value = expression;
}

function equal() {
    // Check if the expression contains any operator
    if (expression.includes('+') || expression.includes('-') || expression.includes('*') || expression.includes('/')) {
        // Evaluate the expression by splitting it into pairs of numbers and operators
        const pairs = expression.split(/(\+|\-|\*|\/)/);
        let result = parseFloat(pairs[0]);

        for (let i = 1; i < pairs.length; i += 2) {
            const operator = pairs[i];
            const operand = parseFloat(pairs[i + 1]);

            if (isNaN(operand)) {
                // Display error message if an operand is missing
                userInput.value = "Error: Incomplete expression";
                return;
            }

            // Perform the operation based on the operator
            switch (operator) {
                case '+':
                    result = add(result, operand);
                    break;
                case '-':
                    result = subtract(result, operand);
                    break;
                case '*':
                    result = multiply(result, operand);
                    break;
                case '/':
                    if (operand === 0) {
                        // Display error message for division by zero
                        userInput.value = "Error: Division by zero";
                        return;
                    }
                    result = divide(result, operand);
                    break;
                default:
                    // Display error message for invalid operator
                    userInput.value = "Error: Invalid operator";
                    return;
            }
        }

        // Round the result to avoid long decimals
        result = Math.round(result * 100) / 100;

        // Update the userInput field with the result
        userInput.value = result;
    }
}

// Rest of the code...




function add(num1, num2){return num1 + num2}
function subtract(num1, num2){return num1 - num2}
function multiply(num1, num2){return num1 * num2}
function division(num1, num2){return num1 / num2}


function erase(){
    expression = '';
    userInput.value = expression;
}