document.getElementById('transfer-btn').addEventListener("click", function () {
    const transferNumber = getValueById('transfer-number');
    if (transferNumber.length !== 11) {
        alert("Wrong Number")
        return;
    }
    const transferAmount = getValueById('transfer-ammount');
    if (transferAmount <= 0) {
        alert('Invaild Amount')
        return;
    }
    const newBalance = getBalance() - Number(transferAmount);
    const pin = getValueById('transfer-pin')
    if (pin == '1234') {
        alert('Money Transfer successfull');
        setBalance(newBalance)
        const history = document.getElementById('history-container');

        const newHistory = document.createElement('div');

        newHistory.innerHTML = `
            <div class="border-b-2 py-3">
                <p class="font-bold">Transfer Money</p>
                <p>Amount: ${transferAmount}</p>
                
                <p class="text-sm">${new Date()}</p>
            </div>
        `;

        history.appendChild(newHistory);
    }
})