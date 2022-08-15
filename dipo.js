//deposite start
//step-1
document.getElementById('deposite-button').addEventListener('click', function(){
    //step-2
    const firstAmmount = document.getElementById('deposite-field')
    const firstAmmountValueString = firstAmmount.value ;
    const firstAmmountValue = parseFloat(firstAmmountValueString)
    //step-3
    const newAmmount = document.getElementById('deposit-text')
    const newAmmountValueString = newAmmount.innerText;
    const newAmmountValue = parseFloat(newAmmountValueString);
    //step-4
    const totalAmmount = newAmmountValue + firstAmmountValue;

    //step-5
    newAmmount.innerText = totalAmmount
    //step 6
    const totalBalance = document.getElementById('ballance-text')
    const totalBallanceString = totalBalance.innerText;
    const totalBallanceStringValue = parseFloat(totalBallanceString);

    //step-7
    totalBalance.innerText = totalAmmount + totalBallanceStringValue


    firstAmmount.value = '';
})
//deposite end