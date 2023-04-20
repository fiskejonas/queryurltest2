document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const cardIds = urlParams.get("cardIds")
    ? urlParams.get("cardIds").split(",")
    : [];

  const cardsContainer = document.getElementById("cardsContainer");

  cardIds.forEach((cardId) => {
    const card = document.createElement("div");
    card.classList.add("card", "selected");
    card.textContent = `Card: ${cardId}`;
    cardsContainer.appendChild(card);
  });
});
