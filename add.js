const donation1 = document.getElementById("donate1");

donation1.addEventListener("click", function () {
    const donate1 = parseFloat(document.getElementById("donateInt1").value);
    const balanceElement = document.getElementById("main-balance");
    const currentBalance = parseFloat(balanceElement.innerText);
    if (isNaN(donate1) || donate1 <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }
    if (donate1 > currentBalance) {
        alert("You cannot donate more than your current balance.");
        return;
    }
    const total = currentBalance - donate1;
    balanceElement.innerText = total.toFixed(2);
    const donateBalance = document.getElementById("donateBalance1");
    const donate = parseFloat(donateBalance.innerText) || 0;
    const updatedDonate = donate1 + donate;
    donateBalance.innerText = updatedDonate.toFixed(2);
});


const donation2 = document.getElementById("donate2");

donation2.addEventListener("click", function () {
    const donate2 = parseFloat(document.getElementById("donateInt2").value);
    const balanceElement = document.getElementById("main-balance");
    const currentBalance = parseFloat(balanceElement.innerText);
    if (isNaN(donate2) || donate2 <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }
    if (donate3 > currentBalance) {
        alert("You cannot donate more than your current balance.");
        return;
    }
    const total = currentBalance - donate2;
    balanceElement.innerText = total.toFixed(2);
    const donateBalance = document.getElementById("donateBalance2");
    const donate = parseFloat(donateBalance.innerText) || 0;
    const updatedDonate = donate2 + donate;
    donateBalance.innerText = updatedDonate.toFixed(2);
    
   
})

const donation3 = document.getElementById("donate3");

donation3.addEventListener("click", function () {
    const donate3 = parseFloat(document.getElementById("donateInt3").value);
    const balanceElement = document.getElementById("main-balance");
    const currentBalance = parseFloat(balanceElement.innerText);
    if (isNaN(donate3) || donate3 <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }
    if (donate3 > currentBalance) {
        alert("You cannot donate more than your current balance.");
        return;
    }
    const total = currentBalance - donate3;
    balanceElement.innerText = total.toFixed(2);
    const donateBalance = document.getElementById("donateBalance3");
    const donate = parseFloat(donateBalance.innerText) || 0;
    const updatedDonate = donate3 + donate;
    donateBalance.innerText = updatedDonate.toFixed(2);
});

