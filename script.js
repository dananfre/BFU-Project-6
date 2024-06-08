const calculatorButtonOperand = document.querySelectorAll('.calculator .operand')
calculatorButtonOperand.forEach(button => {
    button.addEventListener('click', buttonClick);
})

const calculatorButtonOperator = document.querySelectorAll('.calculator .operator')
calculatorButtonOperator.forEach(button => {
    button.addEventListener('click', buttonClick);
})

const calculatorButtonClear = document.querySelector('.calculator .clear')

calculatorButtonClear.addEventListener('click', buttonClearClick)

const resultField = document.querySelector('#result')
const inputField = document.querySelector('#input')

let count = 0
let firstInput = 0
let input = 0
let calculation = 0
let checkOperator

function buttonClick(event) {
    count++
    if (count === 1) {  
        firstInput = parseInt(event.target.value)
        inputField.innerText = firstInput
        calculation = firstInput
        resultField.innerText = firstInput
        disableOperands()
    } else if (count === 2) {
        input = event.target.value
        inputField.innerText = input
        enableOperands()
        disableOperators()
    } else if (!Number.isInteger(input)){
        checkOperator = input
        input = parseInt(event.target.value)
        operators()
        inputField.innerText = input
        resultField.innerText = calculation
        disableOperands()
        enableOperators()
    } else if (Number.isInteger(input)) {
        input = event.target.value
        inputField.innerText = input
        enableOperands()
        disableOperators()
    }
}   

function buttonClearClick() {
    inputField.innerText = 0
    resultField.innerText = 0
    count = 0
    enableOperands()
    enableOperators()
}


function operators() {
    if (checkOperator === "+") {
        calculation += input    
    } else if (checkOperator === "-") {
        calculation -= input
    } else if (checkOperator === "*") {
        calculation *= input
    } else if (checkOperator === "/") {
        calculation /= input
    } 
}

function disableOperands() {
    calculatorButtonOperand[0].disabled = true
    calculatorButtonOperand[1].disabled = true
    calculatorButtonOperand[2].disabled = true
    calculatorButtonOperand[3].disabled = true
    calculatorButtonOperand[4].disabled = true
    calculatorButtonOperand[5].disabled = true
    calculatorButtonOperand[6].disabled = true
    calculatorButtonOperand[7].disabled = true
    calculatorButtonOperand[8].disabled = true
}

function enableOperands() {
    calculatorButtonOperand[0].disabled = false
    calculatorButtonOperand[1].disabled = false
    calculatorButtonOperand[2].disabled = false
    calculatorButtonOperand[3].disabled = false
    calculatorButtonOperand[4].disabled = false
    calculatorButtonOperand[5].disabled = false
    calculatorButtonOperand[6].disabled = false
    calculatorButtonOperand[7].disabled = false
    calculatorButtonOperand[8].disabled = false
}

function disableOperators() {
    calculatorButtonOperator[0].disabled = true
    calculatorButtonOperator[1].disabled = true
    calculatorButtonOperator[2].disabled = true
    calculatorButtonOperator[3].disabled = true
    calculatorButtonOperator[4].disabled = true
    calculatorButtonOperator[5].disabled = true
}

function enableOperators() {
    calculatorButtonOperator[0].disabled = false
    calculatorButtonOperator[1].disabled = false
    calculatorButtonOperator[2].disabled = false
    calculatorButtonOperator[3].disabled = false
    calculatorButtonOperator[4].disabled = false
    calculatorButtonOperator[5].disabled = false
}

