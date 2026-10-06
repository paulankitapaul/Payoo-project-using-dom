function getValueById(id){
    const input = document.getElementById(id)
    const value = input.value ;
    return value
}
function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    return Number(balance);
}
function setBalance(value){
     document.getElementById('balance').innerText=value
}

function showOnly(id){
    const addMoney = document.getElementById('add-money');
    const cashOut = document.getElementById('cash-out');
    const transfer = document.getElementById('transfer-money')
    addMoney.classList.add('hidden')
    cashOut.classList.add('hidden')
    transfer.classList.add('hidden')
    const selectedId = document.getElementById(id);
    selectedId.classList.remove('hidden')
}










// console.log("Machine is connected");


// // Get input value
// function getValueById(id) {
//     const input = document.getElementById(id);
//     const value = input.value;
//     return value;
// }


// // Get balance
// function getBalance() {
//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;

//     return Number(balance);
// }


// // Set balance
// function setBalance(value) {
//     const balanceElement = document.getElementById('balance');

//     balanceElement.innerText = value;
// }