function toggleCountryFilters() {
  const element = document.querySelector(".filters-countries");
  const classOpened = 'filters-countries--open';

  const hide = element.classList.contains(classOpened);

  if (hide) {
    element.classList.remove(classOpened);
  } else {
    element.classList.add(classOpened)
  }
}

toggleCountryFilters();
