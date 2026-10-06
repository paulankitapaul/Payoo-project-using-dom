console.log('payBill Section is added');
document.getElementById('pay-bill-btn').addEventListener("click", function () {
   const payBank = getValueById('pay-bill-bank');
   if (payBank == 'select bank') {
      alert("Please select a Bank")
      return;
   }
   const payNumber = getValueById('pay-bill-Number');
   if (payNumber.length !== 11) {
      alert("wrong Number")
   }
   const payAmount = getValueById('pay-bill-ammount')
   if (payAmount == ' ' || payAmount <= 0) {
      alert('Invaild Ammount')
   }
   const newBalance = getBalance() - Number(payAmount)
   const payPin = getValueById('pay-bill-pin')
   if (payPin == '1234') {
      alert('PayBill SuccessFully Done')
      setBalance(newBalance)
      const history = document.getElementById('history-container');

      const newHistory = document.createElement('div');

      newHistory.innerHTML = `
            <div class="border-b-2 py-3">
                <p class="font-bold">Add Money</p>
                <p>payBill Amount: ${payAmount}</p>
                <p>Bank: ${payBank}</p>
                 
                <p class="text-sm">${new Date()}</p>
            </div>
        `;

      history.appendChild(newHistory);
   }

})