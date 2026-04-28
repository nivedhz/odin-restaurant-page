import "./styles/style.css";
import { createAboutPage } from "./pages/about.js";
import { createHomePage } from "./pages/home.js";
import { createMenuPage } from "./pages/menu.js";

const App = (function () {
  const state = {
    nav: [createHomePage, createMenuPage, createAboutPage],
  };

  const DOM = {
    container: {
      navBtn: document.querySelector(".main-header__nav"),
      contentContainer: document.querySelector("#content"),
    },
    display: {
      logoTxt: document.querySelector(".logo-txt"),
    },
  };

  function showDefault() {
    DOM.container.contentContainer.replaceChildren(createAboutPage());
  }

  function handleSwitching(event) {
    const index = Number(event.target.id);
    DOM.container.contentContainer.replaceChildren(state.nav[index]());
  }

  showDefault();
  DOM.display.logoTxt.addEventListener("click", showDefault);
  DOM.container.navBtn.addEventListener("click", handleSwitching);
})();
