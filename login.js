console.log('login connection is fully connected');
document.getElementById('login-btn').addEventListener('click', function () {
    const numberInput = document.getElementById('input-number');
    const contactNumber = numberInput.value;
    console.log(contactNumber);
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    console.log(pin);
    if (contactNumber == '01822505330' && pin == '9466') {
        alert('Login Successfully Done');
        window.location.assign('./home.html');
    }
    else {
        alert("Login failed")
        return;
    }
})