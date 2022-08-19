document.getElementById('calculate').addEventListener('click',function(){
      
    inputField()
    incomeLessExpenses()

    const totalExpensesValue = totalExpenses();
    const balanceValue = balance()
    setInputValueById('expenses',totalExpensesValue);
    setInputValueById('balance',balanceValue);
    
})

document.getElementById('save-btn').addEventListener('click',function(){
     inputField() ;
     saveingAmountGreater100()
     balancelessThenSaveAmount();
     

    const savingAmountValue = savingAmount();
    setInputValueById("saving-amount",savingAmountValue);

    const remainingBalance = balance() - savingAmountValue;
    setInputValueById('re-balance',remainingBalance);
    

    

})