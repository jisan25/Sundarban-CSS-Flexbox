const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");
const heroHeading = document.querySelector(".hero-heading");
const heroSubHeading = document.querySelector(".hero-subheading");
const heroDescription = document.querySelector(".hero-description");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  heroHeading.classList.toggle("res-heading-toggle");
  heroSubHeading.classList.toggle("res-subheading-toggle");
  heroDescription.classList.toggle("res-hero-description-mt");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
