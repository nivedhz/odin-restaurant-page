import restoImg from "../assets/images/resto.jpg";
import { createMenuPage } from "./menu.js";

const state = {
  gridMsg: [
    "Elevating dining into an art form.",
    "Every detail thoughtfully curated",
    "Indulge in timeless taste",
    "Not just a meal but a moment",
    "The kind of place you don't forget",
  ],
};

function renderMenu() {
  document.querySelector("#content").replaceChildren(createMenuPage());
}
function createHomePage() {
  const homeContainer = document.createElement("main");
  homeContainer.classList.add("home-container");
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const restoImgEl = document.createElement("img");
  restoImgEl.classList.add("resto-img");
  restoImgEl.src = restoImg;

  const welcomeMsgContainer = document.createElement("div");
  welcomeMsgContainer.classList.add("welcome-msg-container");
  const restoName = document.createElement("h1");
  restoName.textContent = "Dining Palace";
  const welcomeMsg = document.createElement("p");
  welcomeMsg.textContent = "Welcome to our restaurant...";
  const menuBtn = document.createElement("button");
  menuBtn.classList.add("menu-btn");
  menuBtn.textContent = "Go to Menu";
  menuBtn.addEventListener("click", renderMenu);

  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  state.gridMsg.forEach((msg) => {
    const gridItem = document.createElement("div");
    gridItem.classList.add("message-grid");
    gridItem.textContent = msg;
    gridContainer.appendChild(gridItem);
  });

  welcomeMsgContainer.append(restoName, welcomeMsg, menuBtn);
  imgContainer.appendChild(welcomeMsgContainer);
  imgContainer.appendChild(restoImgEl);
  homeContainer.appendChild(imgContainer);
  homeContainer.appendChild(gridContainer);

  return homeContainer;
}

export { createHomePage };
