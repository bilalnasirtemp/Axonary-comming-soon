// Set the launch date (30 days from now)
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 7);

function updateCountdown() {
    const now = new Date();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Handle newsletter subscription
const notifyBtn = document.querySelector('.notify-btn');
const emailInput = document.querySelector('.email-input');

notifyBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    if (email && email.includes('@')) {
        alert('Thank you! We\'ll notify you when we launch.');
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});

// Add some interactivity
document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const x = clientX / window.innerWidth;
    const y = clientY / window.innerHeight;
    
    document.querySelector('.background-animation').style.transform = 
        `translate(${x * 20}px, ${y * 20}px)`;
});