const castButton = document.querySelector("#cast-button");
const crewButton = document.querySelector("#crew-button");

castButton.addEventListener('click', () => {
  const cardContainer = document.getElementById("card-container-1");
  const chevronIcon = document.getElementById("chevron-1");

  if (cardContainer.classList.contains("toggle-display")) {
    cardContainer.classList.remove("toggle-display");
    chevronIcon.classList.remove("rotate");
  } else {
    cardContainer.classList.add("toggle-display");
    chevronIcon.classList.add("rotate");
  }
})

crewButton.addEventListener('click', () => {
  const cardContainer = document.getElementById("card-container-2");
  const chevronIcon = document.getElementById("chevron-2");

  if (cardContainer.classList.contains("toggle-display")) {
    cardContainer.classList.remove("toggle-display");
    chevronIcon.classList.remove("rotate");
  } else {
    cardContainer.classList.add("toggle-display");
    chevronIcon.classList.add("rotate");
  }
})