const nameInput = document.getElementById('nameInput');
const submitBtn = document.getElementById('submitBtn');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');
const nextBtn = document.getElementById('nextBtn');

submitBtn.addEventListener('click', function() {
    const name = nameInput.value.trim();
    
    if (name === '') {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        nameInput.classList.add('is-invalid');
    } else {
        errorMessage.style.display = 'none';
        nameInput.classList.remove('is-invalid');
        
        successMessage.textContent = `Welcome, ${name}! You can now proceed to Level 5.`;
        successMessage.style.display = 'block';
        
        nextBtn.classList.remove('disabled');
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.6';
    }
});

nameInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        submitBtn.click();
    }
});
