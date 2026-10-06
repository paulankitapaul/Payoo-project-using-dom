console.log('transfer amount is added');
document.getElementById('transfer-btn').addEventListener("click",function(){
    const transferNumber = getValueById('transfer-number');
    if(transferNumber.length !== 11){
        alert("Wrong Number")
        return;
    }
    const transferAmount = getValueById('transfer-ammount');
    if(transferAmount <=0){
        alert('Invaild Amount')
        return;
    }
    const newBalance =getBalance() - Number(transferAmount);
    const pin = getValueById('transfer-pin')
    if(pin =='1234'){
        alert('Money Transfer successfull');
        setBalance(newBalance)
    }
})