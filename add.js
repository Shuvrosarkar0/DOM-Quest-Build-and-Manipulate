
function updateDonation(donateAmount, donateBalanceId, mainBalanceId) {
    const balanceElement = document.getElementById(mainBalanceId);
    const currentBalance = parseFloat(balanceElement.innerText);
    const newBalance = currentBalance - donateAmount;
    balanceElement.innerText = newBalance.toFixed(2);
    const donateBalanceElement = document.getElementById(donateBalanceId);
    const currentDonate = parseFloat(donateBalanceElement.innerText) || 0;
    donateBalanceElement.innerText = (currentDonate + donateAmount).toFixed(2);
}
function logHistory(donateAmount, donationName) {
    const historyList = document.getElementById("history-list");
    const historyEntry = document.createElement('div');
    historyEntry.className = ' border border-solid rounded-2xl p-8';
    historyEntry.innerHTML = `
        <h3><span>${donateAmount}</span> Taka is Donated for ${donationName}</h3>
        <p>Date: ${new Date()}</p>
    `;

    historyList.insertBefore(historyEntry, historyList.firstChild);
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.showModal();
}


function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.close();
}


function setupDonationButton(buttonId, inputId, donateBalanceId, modalId, donationName) {
    const donateButton = document.getElementById(buttonId);

    donateButton.addEventListener("click", function () {
        const donateAmount = parseFloat(document.getElementById(inputId).value);

        if (isNaN(donateAmount) || donateAmount <= 0) {
            alert("Please enter a valid donation amount.");
            return;
        }

        const balanceElement = document.getElementById("main-balance");
        const currentBalance = parseFloat(balanceElement.innerText);
        if (donateAmount > currentBalance) {
            alert("You cannot donate more than your current balance.");
            return;
        }

    
        updateDonation(donateAmount, donateBalanceId, "main-balance");
        logHistory(donateAmount, donationName);
        
        
        showModal(modalId);
    });
}


setupDonationButton("donate1", "donateInt1", "donateBalance1", "my_modal_1", "Flood at Noakhali, Bangladesh");
setupDonationButton("donate2", "donateInt2", "donateBalance2", "my_modal_2", "Flood Relief in Feni, Bangladesh");
setupDonationButton("donate3", "donateInt3", "donateBalance3", "my_modal_3", "Aid for Injured in the Quota Movement");


const historyTab = document.getElementById('historyBtn');
const donationTab = document.getElementById('donationBtn');

historyTab.addEventListener('click', function() {

    document.getElementById('donationSection').classList.add("hidden");
    document.getElementById('history-section').classList.remove("hidden");

    historyTab.classList.add("text-black", "bg-[#B4F461]");
    historyTab.classList.remove("text-gray-600");
    donationTab.classList.remove("text-black", "bg-[#B4F461]");
    donationTab.classList.add("text-gray-600");
});

donationTab.addEventListener('click', function() {
  
    document.getElementById('donationSection').classList.remove("hidden");
    document.getElementById('history-section').classList.add("hidden");

    donationTab.classList.add("text-black", "bg-[#B4F461]");
    donationTab.classList.remove("text-gray-600");
    historyTab.classList.remove("text-black", "bg-[#B4F461]");
    historyTab.classList.add("text-gray-600");
});


const modalCloseButtons = document.querySelectorAll('.modal-action button');
modalCloseButtons.forEach(button => {
    button.addEventListener('click', function () {
        closeModal(button.closest('dialog').id);
    });
});


const blogButton = document.getElementById("blogButton");

blogButton.addEventListener("click", function() {
    window.location.href = "blog.html"; 
});