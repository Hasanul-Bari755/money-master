document.getElementById('calculate').addEventListener('click',function(){
      
    inputField()
   const isTrue =  incomeLessExpenses()
   if(isTrue === true){
    return;
   }

    const totalExpensesValue = totalExpenses();
    const balanceValue = balance()
    if(isNaN(balanceValue)){
        return;
    }
    setInputValueById('expenses',totalExpensesValue);
    setInputValueById('balance',balanceValue);
    
})

document.getElementById('save-btn').addEventListener('click',function(){
     inputField() ;
     saveingAmountGreater100()
    const isTrue =  balancelessThenSaveAmount();
    if(isTrue === true){
        return;
    }
     

    const savingAmountValue = savingAmount();
    setInputValueById("saving-amount",savingAmountValue);

    const remainingBalance = balance() - savingAmountValue;
    setInputValueById('re-balance',remainingBalance);
    

    

})