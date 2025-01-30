import './scss/style.scss'

const COPYRIGHT_YEAR_ELEMENT = document.getElementById("copyright-year");

const DATE = new Date();
const YEAR = DATE.getFullYear();

function setupCopyrightYear() {
  if (COPYRIGHT_YEAR_ELEMENT) {
    COPYRIGHT_YEAR_ELEMENT.innerText = YEAR.toString();
    console.log("Copyright year set to " + YEAR);
  } else {
    console.error("Copyright year element not found!");
  }
}

function setupMainDisplay() {
  

  console.log("Main display setup complete.");
}

function setupMain() {
  setupCopyrightYear();
  setupMainDisplay();
  console.log("Hello, World! Main setup complete.");
}

setupMain();
