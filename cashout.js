document.getElementById('cashout-btn').addEventListener('click', function () {
    const cashOutNumberInput = getValueById('cashout-number');
    if(cashOutNumberInput.length !=11){
        alert("Invaild-Number")
    }
    const cashOutAmmountInput = getValueById('cashout-ammount');
    const balanceElement = document.getElementById('balance')
    const balance = balanceElement.innerText;
    const newBalance = Number(balance) - Number(cashOutAmmountInput);
    if (newBalance < 0) {
        alert('Invaild-ammount');
        return;
    }
    const cashOutPinInput = getValueById('cashout-pin');
    if(cashOutPinInput == '1234'){
        alert('Cashout-Succcessfull');
        balanceElement.innerText = newBalance;

    }
    else{
        alert('Invaild-pin')
        return;
    }


})






// document.getElementById('cashout-btn').addEventListener('click', function () {
//     const cashOutNumberInput = document.getElementById('cashout-number');
//     const cashOutNumber = cashOutNumberInput.value;
//     if (cashOutNumber.length != 11) {
//         alert('Invaild-Number')
//         return;

//     }
//     const cashOutAmmountInput = document.getElementById('cashout-ammount');
//     const cashOutAmmount = cashOutAmmountInput.value;
//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;
//     const newBalance = Number(balance) - Number(cashOutAmmount);
//     if (newBalance < 0) {
//         alert('Invaild-Ammount')
//         return;
//     }
//     const cashOutPinInput = document.getElementById('cashout-pin');
//     const cashOutPin = cashOutPinInput.value;
//     if (cashOutPin == '1234') {
//         alert('cashout-sucessfull')
//         balanceElement.innerText = newBalance;
//     }
//     else {
//         alert('Invaild-Pin')
//         return;
//     }


// })