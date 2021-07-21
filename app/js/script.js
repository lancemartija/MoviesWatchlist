// card container toggle display
const castButton = document.querySelector("#cast-button");
const crewButton = document.querySelector("#crew-button");
var cardOpen = true;

const toggleCardDisplay = (card, chevron) => {
  let cardContainer = document.getElementById(card);
  let chevronIcon = document.getElementById(chevron);

  if (!cardOpen) {
    cardContainer.classList.remove("toggle-display");
    chevronIcon.classList.remove("rotate");
    cardOpen = true;
  } else {
    cardContainer.classList.add("toggle-display");
    chevronIcon.classList.add("rotate");
    cardOpen = false;
  }
}

castButton.addEventListener('click', () => {
  toggleCardDisplay('card-container-1', 'chevron-1')
});

crewButton.addEventListener('click', () => {
  toggleCardDisplay('card-container-2', 'chevron-2')
});

// burger btn animation
const burgerBtn = document.querySelector('.header__burger-menu');
const overlay = document.querySelector('.overlay');
const html = document.querySelector('html');
const body = document.querySelector('body');
let menuOpen = false;

burgerBtn.addEventListener('click', () => {
  if (!menuOpen) {
    html.classList.add('noscroll');
    body.classList.add('noscroll');
    burgerBtn.classList.add('open');
    overlay.classList.add('fade-in');
    overlay.classList.remove('fade-out');
    menuOpen = true;
  } else {
    html.classList.remove('noscroll');
    body.classList.remove('noscroll');
    burgerBtn.classList.remove('open');
    overlay.classList.add('fade-out');
    overlay.classList.remove('fade-in');
    menuOpen = false;
  }
})