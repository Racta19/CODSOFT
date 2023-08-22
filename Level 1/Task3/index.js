const resultE = document.getElementById('result');
const Buttons = document.querySelectorAll("button");

let expression = "";

Buttons.forEach((Button) => {
    Button.addEventListener('click', () => {
        const val  = Button.value;
        if(val === "="){
            calculate()
        } else if (val === "C"){
            clearRes();
        }else{
            appendValue(val)
        }
    })
})

function appendValue(val){
    expression += val
    updateDisplay();
}

function calculate(){
    try{
        const result = eval(expression);
        resultE.value = result;
        expression = result.toString();
    } catch (err){
        resultE.value = "Error";
        expression = "";
    }
}

function clearRes(){
    expression = "";
    updateDisplay();
}

function updateDisplay(){
    resultE.value = expression;
}