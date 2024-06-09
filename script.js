const calculatorButtonOperand = document.querySelectorAll('.calculator .operand')
calculatorButtonOperand.forEach(button => {
    button.addEventListener('click', buttonClick);
})

const calculatorButtonOperator = document.querySelectorAll('.calculator .operator')
calculatorButtonOperator.forEach(button => {
    button.addEventListener('click', buttonClick);
})

const calculatorButtonOperatorSpecial = document.querySelectorAll('.calculator .operator-special')
calculatorButtonOperatorSpecial.forEach(button => {
    button.addEventListener('click', buttonClickSpecial);
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
disableOperators()
disableSpecialOperators()

function buttonClick(event) {
    count++
    if (count === 1) {  
        firstInput = parseInt(event.target.value)
        inputField.innerText = firstInput
        calculation = firstInput
        resultField.innerText = firstInput
        disableOperands()
        enableOperators()
        enableSpecialOperators()
    } else if (count === 2) {
        input = event.target.value
        inputField.innerText = input
        enableOperands()
        disableOperators()
        disableSpecialOperators()
    } else if (input === "root" || input === "square"){
        checkOperator = input
        input = event.target.value
        operators()
        inputField.innerText = input
        resultField.innerText = calculation
        enableOperands()
        enableOperators()
        disableSpecialOperators()
    } else if (typeof input != 'number') {   
        checkOperator = input
        input = parseInt(event.target.value)
        operators()
        inputField.innerText = input
        resultField.innerText = calculation
        disableOperands()
        enableOperators()
        enableSpecialOperators()
    } else if (typeof input === 'number' || input === "root" || input === "square") {
        input = event.target.value
        inputField.innerText = input
        enableOperands()
        disableOperators()
        enableSpecialOperators()
    }
}
function buttonClickSpecial(event) {
    count++
    if ((typeof input === 'number') || input === "root" || input === "square") {   
        input = event.target.value
        specialOperators()
        resultField.innerText = calculation
    }    
}


   

function buttonClearClick() {
    inputField.innerText = 0
    resultField.innerText = 0
    count = 0
    enableOperands()
    enableOperators()
    disableOperators()
    disableSpecialOperators()
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

function specialOperators() {
    if (input === "root") {
        calculation = Math.sqrt(calculation)
    } else if (input === "square") {
        calculation = (calculation * calculation)
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
}

function enableOperators() {
    calculatorButtonOperator[0].disabled = false
    calculatorButtonOperator[1].disabled = false
    calculatorButtonOperator[2].disabled = false
    calculatorButtonOperator[3].disabled = false
}

function disableSpecialOperators() {
    calculatorButtonOperatorSpecial[0].disabled = true
    calculatorButtonOperatorSpecial[1].disabled = true
}

function enableSpecialOperators() {
    calculatorButtonOperatorSpecial[0].disabled = false
    calculatorButtonOperatorSpecial[1].disabled = false
}


