

const menu = document.querySelector('#menu-btn');
const nvb = document.querySelector('.nvb');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    nvb.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    nvb.classList.remove('active');
};

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const contactNumber = document.getElementById('contact-number').value;
        loginForm.reset();
    });
});

const imageContainer = document.querySelector('.image-container');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const imageOffset = imageContainer.offsetTop;

    if (scrollPosition > imageOffset - window.innerHeight / 2) {
        imageContainer.style.opacity = 1;
    }
});



