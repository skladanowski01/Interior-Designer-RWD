const swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
});

// OpenModal
const portfolioButtons = document.querySelectorAll('.portfolio__button');
const modals = document.querySelectorAll('.portfolio__modal');
const closeButtons = document.querySelectorAll('.button__portfolio-back');

portfolioButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        modals[index].style.display = 'flex';
    });
});

closeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        modals[index].style.display = 'none';
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    modals.forEach((modals) => {
        if (e.target === modals) {
            modals.style.display = 'none';
        }
    });
});