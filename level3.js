 
        let currentLevel = 0;
        const maxLevel = 100;
        const levelBadge = document.getElementById('levelBadge');
        const levelText = document.getElementById('levelText');
        const levelUpBtn = document.getElementById('levelUpBtn');
        const nextBtn = document.getElementById('nextBtn');

        nextBtn.addEventListener('click', function(e) {
            if (currentLevel < maxLevel) {
                e.preventDefault();
            }
        });

        levelUpBtn.addEventListener('click', function() {
            if (currentLevel < maxLevel) {
                currentLevel++;
                levelBadge.textContent = `Level: ${currentLevel}`;
                levelText.textContent = `${currentLevel}/100`;
                
                if (currentLevel === maxLevel) {
                    levelText.textContent = 'Level 100 reached! You can proceed!';
                    levelUpBtn.disabled = true;
                    nextBtn.classList.remove('disabled');
                }
            }
        });
