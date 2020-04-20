const themeSpan = document.querySelector('.slider');
const themeText = document.querySelector('.theme');
const body = document.querySelector('body');
const titleText = Array.from(document.querySelectorAll('.title-text'));
const followers = Array.from(document.querySelectorAll('.followers'));
const cards = Array.from(document.querySelectorAll('.box'));
const texts = Array.from(document.querySelectorAll('.texts'));

function handleClickEvent() {
    if(themeText.textContent === 'Dark Mode') {
        themeText.textContent = 'Light Mode';
    } else {
        themeText.textContent = 'Dark Mode';
    }
    body.classList.toggle('light-bg');
    titleText.forEach(title => title.classList.toggle('light-text'));
    followers.forEach(number => number.classList.toggle('light-text'));
    cards.forEach(card => card.classList.toggle('light-card'));
    texts.forEach(text => text.classList.toggle('text-dark'));
}

themeSpan.addEventListener('click', handleClickEvent);