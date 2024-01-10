document.addEventListener('DOMContentLoaded', function () {
    // Burger Menu Functionality
    const burgerIcon = document.getElementById('burger-icon');
    const navList = document.querySelector('.nav-list ul');

    burgerIcon.addEventListener('click', function () {
        navList.classList.toggle('show');
    });

    // Countdown Functionality
    const countdownElement = document.getElementById('countdown');
    const countdownDate = new Date("January 1, 2025 00:00:00").getTime(); // Set your countdown date here

    setInterval(function () {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);

    // FAQ Dropdown Functionality
    const faqBtn = document.getElementById('faq-btn');
    const faqContent = document.getElementById('faq-content');

    faqBtn.addEventListener('click', function () {
        faqContent.classList.toggle('show');
    });
});
