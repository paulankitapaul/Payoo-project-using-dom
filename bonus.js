document.getElementById('bonus-btn').addEventListener("click", function () {
    const bonusAmount = getValueById('bonus-ammount');
    if (bonusAmount <= 0) {
        alert('Invaild Amount')
        return;
    }
    const newBalance = getBalance() - bonusAmount;
    const balance = setBalance(newBalance);
    const history = document.getElementById('history-container');

        const newHistory = document.createElement('div');

        newHistory.innerHTML = `
            <div class="border-b-2 py-3">
                <p class="font-bold">Bonus</p>
                <p>Amount: ${bonusAmount}</p>
               
                <p class="text-sm">${new Date()}</p>
            </div>
        `;

        history.appendChild(newHistory);


})