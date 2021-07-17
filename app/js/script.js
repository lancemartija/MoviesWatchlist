function toggleVisibility() {
  const cardContainer = document.getElementById("card-container");

  if (cardContainer.classList.contains("toggle-display")) {
    cardContainer.classList.remove("toggle-display");
    console.log("remove");
  } else {
    cardContainer.classList.add("toggle-display");
    console.log("add");
  }
}