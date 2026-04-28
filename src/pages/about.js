import "../styles/about.css";

const state = {
  main: {
    para: "At Dining Palace, we believe that dining is more that just a meal - it is an experience. Every dish is crafted with intention, combining carefully selected ingredients with refined techniques to create something memorable. From the first bit to the last, our focus  remains on balance, detail and authenticity. Our space is designed to offer more than comfort - a setting where conversations flow, moments linger, and time slows down. Whether you're here for the quiet evening or a special occasion, Dining Palace aims to make every visit feel distinct. We do not simply serve food. We curate an atmosphere, a mood, and an experience worth returning to.",
  },
};

function renderMainContent(aboutContainer) {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");
  const mainPara = document.createElement("p");
  mainPara.classList.add("main-container__para");
  mainPara.textContent = state.main.para;
  mainContainer.append(mainPara);

  aboutContainer.append(mainContainer);
}
function renderContactFooter(aboutContainer) {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const contactContainerHeading = document.createElement("h3");
  contactContainerHeading.textContent = "Contact Details";
  const phoneNo = document.createElement("p");
  phoneNo.textContent = "Phone No: +91 98765 43210";

  const address = document.createElement("p");
  address.textContent =
    "Address: Dining Palace, 21 Crescent Avenue, ABQ 80086, USA";

  const email = document.createElement("p");
  email.textContent = "Email: reservations@diningpalace.com";

  contactContainer.append(contactContainerHeading, phoneNo, address, email);

  const openingHoursContainer = document.createElement("div");
  openingHoursContainer.classList.add("opening-hours-container");
  const openingHoursHeading = document.createElement("h3");
  openingHoursHeading.textContent = "Opening Hours";

  const openingHoursWorking = document.createElement("p");
  openingHoursWorking.textContent = "Monday - Thursday: 12:00 PM - 10:30 PM";
  const openingHoursWeekend = document.createElement("p");
  openingHoursWeekend.textContent = "Friday – Sunday: 12:00 PM – 11:30 PM";
  openingHoursContainer.append(
    openingHoursHeading,
    openingHoursWorking,
    openingHoursWeekend,
  );

  aboutContainer.append(openingHoursContainer, contactContainer);
}

function createAboutPage() {
  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");

  renderMainContent(aboutContainer);
  renderContactFooter(aboutContainer);
  return aboutContainer;
}

export { createAboutPage };
