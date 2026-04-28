import "../styles/home.css";
import restoImg from "../assets/images/resto.jpg";
import foodCoverImg from "../assets/images/food-cover.svg";
import cupImg from "../assets/images/cup.svg";
import clockImg from "../assets/images/clock.svg";
import { createMenuPage } from "./menu.js";

const state = {
  restoMsg: {
    header: "Welcome to Dining Palace..",
    paragraph:
      "Dining Palace is a refined sanctuary where culinary excellence meets warm hospitality, creating an experience that feels both indulgent and inviting. Nestled in a setting designed for comfort and elegance, the hotel celebrates the art of fine dining alongside thoughtfully curated stays. Every detail—from the ambiance of its spaces to the flavors on each plate—is crafted to delight the senses. At Dining Palace, guests are welcomed into a world where sophistication blends seamlessly with ease, offering a stay that is memorable, flavorful, and effortlessly enriching.",
    img: [foodCoverImg, cupImg, clockImg],
  },
};

const renderMenu = () => {
  document.querySelector("#content").replaceChildren(createMenuPage());
};

const renderRestoMsg = (homeContainer) => {
  const restoMsgContainer = document.createElement("div");
  restoMsgContainer.classList.add("resto-msg__container");

  const header = document.createElement("h1");
  header.classList.add("resto-msg__header");
  header.textContent = state.restoMsg.header;

  const paragraph = document.createElement("p");
  paragraph.classList.add("resto-msg__para");
  paragraph.textContent = state.restoMsg.paragraph;

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("resto-msg__img-container");
  state.restoMsg.img.forEach((img) => {
    const imgEl = document.createElement("img");
    imgEl.src = img;
    imgContainer.appendChild(imgEl);
  });

  restoMsgContainer.append(header, paragraph, imgContainer);
  homeContainer.appendChild(restoMsgContainer);
};

const renderImgContainer = (homeContainer) => {
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

  welcomeMsgContainer.append(restoName, welcomeMsg, menuBtn);
  imgContainer.appendChild(welcomeMsgContainer);
  imgContainer.appendChild(restoImgEl);

  homeContainer.appendChild(imgContainer);
};

const createHomePage = () => {
  const homeContainer = document.createElement("main");
  homeContainer.classList.add("home-container");

  renderImgContainer(homeContainer);
  renderRestoMsg(homeContainer);

  return homeContainer;
};

export { createHomePage };
