function toggleCountriesPopup() {
  const element = document.querySelector(".step2-popup");
  const emptyFlagElement = document.querySelector(".super-select__flag--empty");

  const openedClass = 'step2-popup--open';

  if (element.classList.contains(openedClass)) {
    element.classList.remove(openedClass);
    emptyFlagElement.style.display = 'block';
  } else {
    element.classList.add(openedClass);
    emptyFlagElement.style.display = 'none';
  }
}

toggleCountriesPopup();
