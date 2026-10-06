document.getElementById('cashout-btn').addEventListener('click',function(){
    const cashoutNumber = getValueById('cashout-number')
    if(cashoutNumber.length !=11){
        alert('invalid Number')
        return;
    }
    const cashoutAmount = getValueById('cashout-ammount')
    if(cashoutAmount=='' || Number(cashoutAmount)<0){
        alert('invaild ammount');
        return;
    }
    const currentBalance = getBalance();
    const balance = currentBalance -  Number(cashoutAmount);
    const pin = getValueById('cashout-pin')
    if(pin=='1234'){
        alert('CashOut successfull')
        setBalance(balance)
        const history = document.getElementById('history-container');

        const newHistory = document.createElement('div');

        newHistory.innerHTML = `
            <div class="border-b-2 py-3">
                <p class="font-bold">Add Money</p>
                <p>Amount: ${cashoutAmount}</p>
                <p class="text-sm">${new Date()}</p>
            </div>
        `;

        history.appendChild(newHistory);
    }

})






// document.getElementById('cashout-btn').addEventListener('click', function () {

//     // Cashout number
//     const cashOutNumber = getValueById('cashout-number');

//     if (cashOutNumber.length !== 11) {
//         alert("Invalid Number");
//         return;
//     }

//     // Cashout amount
//     const cashOutAmount = getValueById('cashout-ammount');

//     // Amount empty/invalid kina
//     if (cashOutAmount === "" || Number(cashOutAmount) <= 0) {
//         alert("Invalid Amount");
//         return;
//     }

//     // Current balance
//     const currentBalance = getBalance();

//     // New balance
//     const newBalance = currentBalance - Number(cashOutAmount);

//     if (newBalance < 0) {
//         alert("Insufficient Balance");
//         return;
//     }

//     // PIN
//     const pin = getValueById('cashout-pin');

//     if (pin === '1234') {
//         alert("Cashout Successful");
//         setBalance(newBalance);
//     }
//     else {
//         alert("Invalid PIN");
//         return;
//     }
// });






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