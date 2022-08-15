document.getElementById('withdraw-button').addEventListener('click', function(){
    //get the withdraw ammount fro, the input field
    //step-2
    const withdrawField = document.getElementById('withdraw-field')
    const withdrawValueString = withdrawField.value;
    const withdrawValue = parseFloat(withdrawValueString);
    //step-3
    const previousWithdrawTotalElement = document.getElementById('withdraw-text')
    const ballanceValueString = previousWithdrawTotalElement.innerText;
    const ballanceValue = parseFloat(ballanceValueString)
    //step-4 calculate total ammount
    const currentWithdrawTotal = withdrawValue + ballanceValue;

    //step-5 set total withdraw ammount
    previousWithdrawTotalElement.innerText = currentWithdrawTotal

})