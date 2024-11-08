/* ===================toggle icon navbar =================== */
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}

/* ===================scroll section active link =================== */

let sections = document.querySelector('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let activeLink = document.querySelector(`header nav a[href='#${id}']`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        }
    });

    // =================== sticky navbar ===================
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // =================== menu icon and navbar ===================
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


/* =================== sticky navbar =================== */

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* ===================  navbar =================== */

const typed = new Typed('.multiple-text', {
    strings: ['Software Developer Junior', 'QA Engineer Junior'], 
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

document.getElementById('currentYear').textContent = new Date().getFullYear();