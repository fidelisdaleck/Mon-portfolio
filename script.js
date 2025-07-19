    const burgerBtn = document.querySelector('.burger-menu-button');
    const burgerMenu = document.querySelector('.burger-menu');

    burgerBtn.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
    });
