function toggleMenu() {
  const element = document.querySelector(".navigation");

  const openedClass = 'navigation--opened';
  const closedClass = 'navigation--closed';

  if (element.classList.contains(closedClass)) {
    element.classList.remove(closedClass);
    element.classList.add(openedClass);
  } else {
    element.classList.remove(openedClass);
    element.classList.add(closedClass);
  }
}

function initializeMenu() {
  toggleMenu();
}

initializeMenu();
