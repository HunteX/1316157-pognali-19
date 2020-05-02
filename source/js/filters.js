function toggleCountryFilters() {
  const element = document.querySelector(".country-filters__container");
  const buttonOpen = document.querySelector(".country-filters__open");
  const buttonClose = document.querySelector(".country-filters__close");

  const hide = element.style.display === "flex";

  if (hide) {
    element.style.display = "none";
    buttonOpen.style.display = "block";
    buttonClose.style.display = "none";
  } else {
    element.style.display = "flex";
    buttonOpen.style.display = "none";
    buttonClose.style.display = "block";
  }
}
