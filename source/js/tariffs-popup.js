function toggleTariffsPopup(event) {
  const element = document.querySelector(".tariffs-popup");

  const openedClass = 'tariffs-popup--opened';

  if (element.classList.contains(openedClass)) {
    element.classList.remove(openedClass);
  } else {
    element.classList.add(openedClass);
  }
}

toggleTariffsPopup();
