//  error handeling
function inputField(){
    const savingPersent  =getInputValueById('save-input');
    const income  = getInputValueById('income')
    const food = getInputValueById('food');
    const rent  = getInputValueById('rent');
    const clothes = getInputValueById('cloth');

    if(isNaN(savingPersent || income || food || rent || clothes)){
        alert("Enter a valid input")
        return;
    }
    else if(income <= 0 || food <= 0 || rent <= 0 || clothes <= 0 || savingPersent <= 0  ){
        alert("Enter positive number")
        return;
    }
}

function incomeLessExpenses(){ 
    const income  = getInputValueById('income')
    const expenses = totalExpenses();
    if(income < expenses){
        alert("Income is less then expenses")
        return true;
    }
    else{
        return false;
    }
    
}

function  balancelessThenSaveAmount(){
    if(balance() < savingAmount()){
        alert('Balance less then saving amount');
        return true;
    }
    else{
        return false;
    }
}

function saveingAmountGreater100(){
    const savingPersent  =getInputValueById('save-input');
    if(savingPersent > 100){
        alert('Save is not possible')
        return;
    }
}

// calculation part star --------------------------------------------------
function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
   // inputField.value = "";
     return inputValue;
}

function setInputValueById(elementId,value){
  const elementFeild = document.getElementById(elementId);
   elementFeild.innerText = value;

}

function totalExpenses(){
    const food = getInputValueById('food');
    const rent  = getInputValueById('rent');
    const clothes = getInputValueById('cloth');
    if(!isNaN(food && rent && clothes)){
        return food + rent + clothes;
    }
    else{
        return 0;
    }
}

function balance(){
    const income = getInputValueById('income');
     return income - totalExpenses();
}

function savingAmount(){
    const savingPersent  =getInputValueById('save-input');
    const income  = getInputValueById('income')
    const savingAmount = (savingPersent * income) /100;
    return savingAmount;
}



