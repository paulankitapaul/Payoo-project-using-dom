document.getElementById('add-money-btn').addEventListener('click', function () {

    const bankAccount = getValueById('add-money-bank');

    if (bankAccount == 'select bank') {
        alert("Please select a bank name");
        return;
    }

    const accno = getValueById("add-money-number");

    if (accno.length !== 11) {
        alert("Invalid Number");
        return;
    }

    const amount = getValueById("add-money-ammount");

    if (amount <= 0) {
        alert("Invalid Amount");
        return;
    }

    const pin = getValueById("add-money-pin");

    if (pin == '1234') {
        const newBalance = getBalance() + Number(amount);

        setBalance(newBalance);
        alert(`Add Money successful from
${bankAccount} and ${new Date()}`);

        // Add history
        const history = document.getElementById('history-container');

        const newHistory = document.createElement('div');

        newHistory.innerHTML = `
            <div class="border-b-2 py-3">
                <p class="font-bold">Add Money</p>
                <p>Amount: ${amount}</p>
                <p>Bank: ${bankAccount}</p>
                <p>Account: ${accno}</p>
                <p class="text-sm">${new Date()}</p>
            </div>
        `;

        history.appendChild(newHistory);
    }
    else {
        alert("Wrong Pin");
        return;
    }
});