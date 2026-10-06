
document.getElementById('add-money-btn').addEventListener('click', function () {
    const bankAccount = getValueById('add-money-bank');
    if (bankAccount == 'select bank') {
        alert("Please a bank name")
        return;
    }
    // get bank account number
    const accno = getValueById("add-money-number");
    if (accno.length !== 11) {
        alert("Invaild Number")
        return;
    }
    const amount = getValueById("add-money-ammount");
    if (amount <= 0) {
        alert('Invaild Amount')
        return;
    }
    const newBalance = getBalance() + Number(amount);

    const pin = getValueById("add-money-pin")
    if (pin == '1234') {
        alert(`Add Money successful from
         ${bankAccount} and ${new Date()}`)
        setBalance(newBalance);
    }
    else {
        alert("Wrong Pin")
    }
})