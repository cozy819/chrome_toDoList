const COUNTRY_LS = "selectedCountry";

const selection = document.querySelector("select");
const selectionList = document.querySelectorAll("option");

function loadLS() {
  const loadedItem = localStorage.getItem(COUNTRY_LS);
  if (loadedItem !== null) {
    addAtt(loadedItem);
  }
}

function addAtt(loadedItem) {
  const countryList = ["none", "korea", "greece", "turkey", "finland"];
  for (let i = 0; i < countryList.length; i++) {
    if (loadedItem === countryList[i]) {
      selectionList[i].setAttribute("selected", true);
    }
  }
}

function saveToLS(selectedCountry) {
  const loadedItem = localStorage.getItem(COUNTRY_LS);
  if (loadedItem) {
    localStorage.removeItem(COUNTRY_LS);
  }
  localStorage.setItem(COUNTRY_LS, selectedCountry);
}

function changedSelection(event) {
  const selectedCountry = event.target.value;
  saveToLS(selectedCountry);
}

function init() {
  loadLS();
  selection.addEventListener("change", changedSelection);
}

init();
