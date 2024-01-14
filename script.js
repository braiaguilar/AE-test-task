function toggleNav() {
    let nav = document.querySelector('nav');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
}

// Countdown functionality
function updateCountdown() {
    let now = new Date();
    let endDate = new Date('2024-02-14T23:59:59');
    let timeDiff = endDate - now;

    if (timeDiff <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').textContent = 'Offer Expired!';
    } else {
        let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
            (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById('countdown').textContent =
            days +
            ' Days ' +
            hours +
            ' Hours ' +
            minutes +
            ' Minutes ' +
            seconds +
            ' Seconds';
    }
}

let countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial update

// FAQ dropdown
let faqDropdown = document.querySelector('.faq-dropdown');
let faqContent = document.querySelector('.faq-content');

faqDropdown.addEventListener('click', function () {
    faqContent.style.display =
        faqContent.style.display === 'block' ? 'none' : 'block';
});
