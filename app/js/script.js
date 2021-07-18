const castButton = document.getElementById("cast-button");
const crewButton = document.getElementById("crew-button");

castButton.onclick = function () {
  const cardContainer = document.getElementById("card-container-1");
  const chevronIcon = document.getElementById("chevron-1");

  if (cardContainer.classList.contains("toggle-display")) {
    cardContainer.classList.remove("toggle-display");
    chevronIcon.classList.remove("rotate");
  } else {
    cardContainer.classList.add("toggle-display");
    chevronIcon.classList.add("rotate");
  }
}

crewButton.onclick = function () {
  const cardContainer = document.getElementById("card-container-2");
  const chevronIcon = document.getElementById("chevron-2");

  if (cardContainer.classList.contains("toggle-display")) {
    cardContainer.classList.remove("toggle-display");
    chevronIcon.classList.remove("rotate");
  } else {
    cardContainer.classList.add("toggle-display");
    chevronIcon.classList.add("rotate");
  }
}