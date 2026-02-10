let coinCount = 0;
const requiredCoins = 20;
const coinCountDisplay = document.getElementById('coinCount');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const nextBtn = document.getElementById('nextBtn');
const requirementMessage = document.getElementById('requirementMessage');

function updateUI() {
    coinCountDisplay.textContent = coinCount;
    
    if (coinCount >= requiredCoins) {
        requirementMessage.textContent = 'You can proceed!';
        requirementMessage.style.color = '#28a745';
        requirementMessage.style.fontWeight = 'bold';
        nextBtn.classList.remove('disabled');
    } else {
        const remaining = requiredCoins - coinCount;
        requirementMessage.textContent = `Coins needed: ${remaining}`;
        requirementMessage.style.color = '#666';
        requirementMessage.style.fontWeight = '500';
        nextBtn.classList.add('disabled');
    }
}

increaseBtn.addEventListener('click', function() {
    coinCount++;
    updateUI();
});

decreaseBtn.addEventListener('click', function() {
    if (coinCount > 0) {
        coinCount--;
        updateUI();
    }
});

nextBtn.addEventListener('click', function(e) {
    if (coinCount < requiredCoins) {
        e.preventDefault();
    }
});
