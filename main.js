const navToggle = document.querySelectorAll('#nav-toggle');
const header = document.querySelector('#header');
const nav = document.querySelector('#nav');

navToggle.forEach(btn => {
    
    btn.addEventListener('click', () => {
        if (nav.hasAttribute('data-expanded')) {
            nav.toggleAttribute('data-expanded');
            header.toggleAttribute('data-overlay');
        } else {
            nav.toggleAttribute('data-expanded');
            header.toggleAttribute('data-overlay');
        }         
    });
});