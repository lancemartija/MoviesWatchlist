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
let menuOpen = false;

burgerBtn.addEventListener('click', () => {
  if (!menuOpen) {
    burgerBtn.classList.add('open');
    menuOpen = true;
  } else {
    burgerBtn.classList.remove('open');
    menuOpen = false;
  }
})