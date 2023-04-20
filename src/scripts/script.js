const cards = document.querySelectorAll(".card");
const generateLink = document.getElementById("generateLink");
const resultLink = document.getElementById("resultLink");

let selectedCards = new Set();

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const cardId = card.dataset.id;
    if (selectedCards.has(cardId)) {
      selectedCards.delete(cardId);
      card.classList.remove("selected");
    } else {
      selectedCards.add(cardId);
      card.classList.add("selected");
    }
  });
});

generateLink.addEventListener("click", () => {
  const baseUrl = "http://127.0.0.1:5500/selected-cards.html";
  const parameters = { cardIds: Array.from(selectedCards).join(",") };

  const urlWithParameters = createUrlWithParameters(baseUrl, parameters);
  resultLink.href = urlWithParameters;
  resultLink.style.display = "inline";
});

function createUrlWithParameters(baseUrl, parameters) {
  const url = new URL(baseUrl);
  Object.keys(parameters).forEach((key) =>
    url.searchParams.append(key, parameters[key])
  );
  return url;
}
