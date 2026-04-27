import "./styles/style.css";
import { createAboutPage } from "./pages/about.js";
import { createHomePage } from "./pages/home.js";
import { createMenuPage } from "./pages/menu.js";

const DOM = {
  button: {},
  container: {
    navBtn: document.querySelector(".main-header__nav"),
    contentContainer: document.querySelector("#content"),
  },
};
const state = {
  nav: [createHomePage, createMenuPage, createAboutPage],
};

function showDefault() {
  DOM.container.contentContainer.replaceChildren(createHomePage());
}

function handleSwitching(event) {
  const index = Number(event.target.id);
  DOM.container.contentContainer.replaceChildren(state.nav[index]());
}

showDefault();
DOM.container.navBtn.addEventListener("click", handleSwitching);
