// card container toggle display
const castButton = document.querySelector("#cast-button");
const crewButton = document.querySelector("#crew-button");

const toggleCardDisplay = (card, chevron) => {
  let cardContainer = document.getElementById(card);
  let chevronIcon = document.getElementById(chevron);

  if (cardContainer.classList.contains("toggle-display")) {
    cardContainer.classList.remove("toggle-display");
    chevronIcon.classList.remove("rotate");
  } else {
    cardContainer.classList.add("toggle-display");
    chevronIcon.classList.add("rotate");
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
    console.log('add');
    burgerBtn.classList.add('open');
    menuOpen = true;
  } else {
    console.log('remove');
    burgerBtn.classList.remove('open');
    menuOpen = false;
  }
})