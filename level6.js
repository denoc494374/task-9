// Level 6: Conditionals - three doors, only one correct
(function(){
    const doors = Array.from(document.querySelectorAll('.door-btn'));
    const resultMessage = document.getElementById('resultMessage');
    // choose a correct door at random (1-3)
    const correctDoor = Math.floor(Math.random() * 3) + 1;

    function showMessage(text, type) {
        resultMessage.innerHTML = '';
        const div = document.createElement('div');
        div.className = `alert ${type === 'success' ? 'alert-success' : 'alert-danger'} alert-reveal`;
        div.textContent = text;
        resultMessage.appendChild(div);
    }

    function disableDoors() {
        doors.forEach(d => d.classList.add('disabled'));
    }

    doors.forEach(btn => {
        btn.addEventListener('click', function() {
            const chosen = Number(this.dataset.door);
            if (chosen === correctDoor) {
                showMessage('Success — that was the correct door!', 'success');
                disableDoors();
            } else {
                showMessage('Wrong door — try again!', 'error');
                // small shake animation on wrong choice
                this.animate([
                    { transform: 'translateX(0)' },
                    { transform: 'translateX(-8px)' },
                    { transform: 'translateX(8px)' },
                    { transform: 'translateX(0)' }
                ], { duration: 300, easing: 'ease' });
            }
        });
    });

    // expose correctDoor to console for testing
    console.log('Level6 correctDoor =', correctDoor);
})();