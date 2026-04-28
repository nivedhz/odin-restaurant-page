import "../styles/menu.css";

const state = {
  menuItems: [
    {
      name: "Touching Grass Platter",
      price: 69,
    },
    {
      name: "NPC Garlic Bread",
      price: 420,
    },
    {
      name: "Side Quest Soup",
      price: 69,
    },
    {
      name: "Main Character Meal",
      price: 420,
    },
    {
      name: "404",
      price: "undefined",
    },
    {
      name: "Ran out of Ideas",
      price: 696969,
    },
  ],
};

function createMenuPage() {
  const menuContainer = document.createElement("div");

  const headingContainer = document.createElement("div");
  headingContainer.classList.add("heading-container");
  const restoHeading = document.createElement("h1");
  restoHeading.classList.add("resto-heading");
  restoHeading.textContent = "Dining Palace";
  headingContainer.append(restoHeading);

  const menuElContainer = document.createElement("div");
  menuElContainer.classList.add("menu-el__container");

  const menuHeading = document.createElement("h1");
  menuHeading.classList.add("menu-heading");
  menuHeading.textContent = "Menu";
  menuElContainer.append(menuHeading);

  state.menuItems.forEach((item) => {
    const menuItemContainer = document.createElement("div");
    menuItemContainer.classList.add("menu-item__container");

    const itemName = document.createElement("p");
    itemName.classList.add("menu-item__name");
    itemName.textContent = item.name;

    const itemPrice = document.createElement("p");
    itemPrice.classList.add("menu-item__price");
    itemPrice.textContent = `...$${item.price}`;

    menuItemContainer.append(itemName, itemPrice);
    menuElContainer.append(menuItemContainer);
  });

  menuContainer.append(headingContainer, menuElContainer);

  return menuContainer;
}

export { createMenuPage };
