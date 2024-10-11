function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function exploreMore() {
    alert("Explore more features coming soon!");
}

function selectPlan(planType) {
    alert(`${planType} plan selected!`);
    // Here you can implement further logic for handling plan selection
}

function upgradeToVIP() {
    alert("Upgrading to VIP...");
    // Logic to upgrade to VIP
}

function cancelPremium() {
    alert("Cancelling Premium...");
    // Logic to cancel premium subscription
}

function buyCredits(amount) {
    alert(`Purchasing ${amount} credits...`);
    // Logic for purchasing credits
}

function translatePage() {
    alert("Translation feature coming soon!");
}

function logout() {
    alert("Logging out...");
    // Logic to handle logging out
}
