//  error handeling
function inputField(){
    const savingPersent  =getInputValueById('save-input');
    const income  = getInputValueById('income')
    const food = getInputValueById('food');
    const rent  = getInputValueById('rent');
    const clothes = getInputValueById('cloth');

    if(isNaN(savingPersent || income || food || rent || clothes)){
        alert("Enter a valid input")
    }
    else if(income <= 0 || food <= 0 || rent <= 0 || clothes <= 0 || savingPersent <= 0  ){
        alert("Enter positive number")
    }
}

function incomeLessExpenses(){ 
    const income  = getInputValueById('income')
    const expenses = totalExpenses();
    if(income < expenses){
        alert("Income is less then expenses")
      
    }
    
}

function  balancelessThenSaveAmount(){
    if(balance() < savingAmount()){
        alert('Balance less then saving amount');
    }
}

function saveingAmountGreater100(){
    const savingPersent  =getInputValueById('save-input');
    if(savingPersent > 100){
        alert('Save is not possible')
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
    return food + rent + clothes;
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



