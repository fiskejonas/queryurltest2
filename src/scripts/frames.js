const url = "https://frames-5130.restdb.io/rest/frames";
const options = {
  headers: {
    "x-apikey": "644143ee39cf552ef728c336",
  },
};

let filter = "alle";
let personer;
const header = document.querySelector("h1");
const filterKnapper = document.querySelectorAll("nav button");
filterKnapper.forEach((knap) =>
  knap.addEventListener("click", filtrerPersoner)
);

function filtrerPersoner() {
  filter = this.dataset.aco;

  visPersoner();

  header.textContent = this.textContent;
  document.querySelector(".valgt").classList.remove("valgt");
  this.classList.add("valgt");
}

async function hentData() {
  const JSONDATA = await fetch(url, options);
  personer = await JSONDATA.json();

  visPersoner();
}

let selectedCards = new Set();

function visPersoner() {
  const section = document.querySelector("section");
  const template = document.querySelector("template").content;
  section.textContent = "";
  personer.forEach((person) => {
    if (filter == person.aco || filter == "alle") {
      const klon = template.cloneNode(true);
      klon.querySelector(".template_navn").textContent = person.title;
      klon.querySelector(".template_frame").src =
        "https://wmcontent.dk/_HighImpact/" + person.link;
      klon.querySelector(".template_beskrivelse").textContent =
        person.description;

      klon.querySelector(".template_article").addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("selected");
        if (selectedCards.has(person)) {
          selectedCards.delete(person);
        } else {
          selectedCards.add(person);
        }
      });

      section.appendChild(klon);
    }
  });
}

function navigateToSelectedCards() {
  const selectedIds = Array.from(selectedCards, (card) => card._id).join(",");
  window.location.href = `selected-cards.html?ids=${selectedIds}`;
}

document
  .getElementById("view-selected-cards")
  .addEventListener("click", navigateToSelectedCards);

hentData();
