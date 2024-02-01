/**
 * Ovde dodajemo Toggle Header-a sa hamburger ikonicom za uredjaje koji su manji npr od 
 */
const mainHeader = document.querySelector('.js-main-header');

if (window.innerWidth < 768) {
    mainHeader.classList.add('closed');
}

function toggleHeader() {
    if (mainHeader.classList.contains('closed')) {
        mainHeader.classList.remove('closed');
        mainHeader.style.display = 'flex';
    } else {
        mainHeader.classList.add('closed');
        mainHeader.style.display = 'none';
    }
}