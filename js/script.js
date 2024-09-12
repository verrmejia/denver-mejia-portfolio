// Nav Link Active part start
const navLinkEls = document.querySelectorAll('.nav-link');
const sectionEls = document.querySelectorAll('.section');

let activeNavLink = '';
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= (sectionEl.offsetTop - 300)) {
            activeNavLink = sectionEl.id;
        }
        else if (window.scrollY >= 4290 ) {
            activeNavLink = 'contact';
        }
    });

    navLinkEls.forEach(navLinkEl => {
        if (navLinkEl.href.includes(activeNavLink)) {
            document.querySelector('.active').classList.remove('active');
            navLinkEl.classList.add('active');
        }
    })
})
// Nav Link Active part end

// Popup-Image Part Start
document.querySelectorAll('.projects img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
})

document.querySelector('.popup-image').onclick = () => {
    popupImageRemove();
}

function popupImageRemove() {
    document.querySelector('.popup-image').style.display = 'none';
}
// Popup-Image Part End