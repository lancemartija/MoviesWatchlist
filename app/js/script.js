function toggleVisibility() {
  const cardContainer = document.getElementById("card-container");
  const chevronIcon = document.getElementById("chevron");

  if (cardContainer.classList.contains("toggle-display")) {
    cardContainer.classList.remove("toggle-display");
    chevronIcon.classList.remove("rotate");
  } else {
    cardContainer.classList.add("toggle-display");
    chevronIcon.classList.add("rotate");
  }
}