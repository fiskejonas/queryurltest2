// selected-cards.js

const url = "https://frames-5130.restdb.io/rest/frames";
const options = {
  headers: {
    "x-apikey": "644143ee39cf552ef728c336",
  },
};

function getSelectedCardIds() {
  const queryString = new URLSearchParams(window.location.search);
  const idsString = queryString.get("ids");
  return idsString ? idsString.split(",") : [];
}

async function displaySelectedCards() {
  const selectedCardIds = getSelectedCardIds();
  if (selectedCardIds.length === 0) return;

  const JSONDATA = await fetch(url, options);
  const allCards = await JSONDATA.json();
  const selectedCards = allCards.filter((card) =>
    selectedCardIds.includes(card._id)
  );

  // Use visPersoner function to display selected cards
  // Make sure to pass `selectedCards` instead of `personer`
  visPersoner(selectedCards);
}

function visPersoner(cardsToDisplay) {
  const section = document.querySelector("section");
  const template = document.querySelector("template").content;
  section.textContent = "";
  cardsToDisplay.forEach((person) => {
    const klon = template.cloneNode(true);
    klon.querySelector(".template_navn").textContent = person.title;
    klon.querySelector(".template_frame").src =
      "https://wmcontent.dk/_HighImpact/" + person.link;
    klon.querySelector(".template_beskrivelse").textContent =
      person.description;
    section.appendChild(klon);
  });
}

displaySelectedCards();
