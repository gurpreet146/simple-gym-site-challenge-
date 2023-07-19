const window_width = window.innerWidth;
//function for showing and hidding navbar list section
function show_about_us_body(value) {
    if (window_width <= 800) {
        const op = document.querySelector('.open_menue');
        const cl = document.querySelector(`.close_menue`);
        const na = document.querySelector('.navbar');
        if (value === 1) {
            const hid = document.querySelector(`.home`);
            const about = document.querySelector(`.about`);
            const fitness = document.querySelector(`.fitness_calendar`);
            const contact = document.querySelector(`.contact_us`);
            hid.style.display = `block`;
            about.style.display = 'none';
            fitness.style.display = `none`;
            contact.style.display = `none`;
            na.style.display = 'none';
            op.style.display = 'flex';
            cl.style.display = 'none';
            cl.style.zIndex = 0;
        }
        else if (value === 2) {
            const hid = document.querySelector(`.home`);
            const about = document.querySelector(`.about`);
            const fitness = document.querySelector(`.fitness_calendar`);
            const contact = document.querySelector(`.contact_us`);
            hid.style.display = `none`;
            about.style.display = 'block';
            fitness.style.display = `none`;
            contact.style.display = `none`;
            na.style.display = 'none';
            op.style.display = 'flex';
            cl.style.display = 'none';
            cl.style.zIndex = 0;
        }
        else if (value === 3) {
            const hid = document.querySelector(`.home`);
            const about = document.querySelector(`.about`);
            const fitness = document.querySelector(`.fitness_calendar`);
            const contact = document.querySelector(`.contact_us`);
            hid.style.display = `none`;
            about.style.display = 'none';
            fitness.style.display = `block`;
            contact.style.display = `none`;
            na.style.display = 'none';
            op.style.display = 'flex';
            cl.style.display = 'none';
            cl.style.zIndex = 0;
        }
        else {
            const hid = document.querySelector(`.home`);
            const about = document.querySelector(`.about`);
            const fitness = document.querySelector(`.fitness_calendar`);
            const contact = document.querySelector(`.contact_us`);
            hid.style.display = `none`;
            about.style.display = 'none';
            fitness.style.display = `none`;
            contact.style.display = `block`;
            na.style.display = 'none';
            op.style.display = 'flex';
            cl.style.display = 'none';
            cl.style.zIndex = 0;
        }
    }
    else {
        if (value === 1) {
            const hid = document.querySelector(`.home`);
            const about = document.querySelector(`.about`);
            const fitness = document.querySelector(`.fitness_calendar`);
            const contact = document.querySelector(`.contact_us`);
            hid.style.display = `block`;
            about.style.display = 'none';
            fitness.style.display = `none`;
            contact.style.display = `none`;
            console.log(1);
        }
        else if (value == 2) {
            const hid = document.querySelector(`.home`);
            const about = document.querySelector(`.about`);
            const fitness = document.querySelector(`.fitness_calendar`);
            const contact = document.querySelector(`.contact_us`);
            hid.style.display = `none`;
            about.style.display = 'block';
            fitness.style.display = `none`;
            contact.style.display = `none`;
            console.log(2);
        }
        else if (value === 3) {
            const hid = document.querySelector(`.home`);
            const about = document.querySelector(`.about`);
            const fitness = document.querySelector(`.fitness_calendar`);
            const contact = document.querySelector(`.contact_us`);
            hid.style.display = `none`;
            about.style.display = 'none';
            fitness.style.display = `block`;
            contact.style.display = `none`;
        }
        else {
            const hid = document.querySelector(`.home`);
            const about = document.querySelector(`.about`);
            const fitness = document.querySelector(`.fitness_calendar`);
            const contact = document.querySelector(`.contact_us`);
            hid.style.display = `none`;
            about.style.display = 'none';
            fitness.style.display = `none`;
            contact.style.display = `block`;
        }
    }
}
if (window.innerWidth <= 800) {
    //function for hamburger icon
    const open = document.querySelector('.open_menue');
    const close = document.querySelector(`.close_menue`);
    const nav = document.querySelector('.navbar');
    function show() {
        nav.style.display = 'flex';
        open.style.display = 'none';
        close.style.display = 'flex';
        close.style.zIndex = 12;
    }

    function hid() {
        nav.style.display = 'none';
        open.style.display = 'flex';
        close.style.display = 'none';
        close.style.zIndex = 0;
    }
}
//function for visible content 
window.addEventListener(`scroll`, reveal);

function reveal() {
    var reveals = document.querySelectorAll(`.reveal`);

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add(`active`);
        }
        else {
            reveals[i].classList.remove(`active`);
        }
    }
}

//function when we refresh than  Scroll to the top of the page
window.addEventListener('beforeunload', function () {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
});