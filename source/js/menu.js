function toggleMenu() {
  const menuElement = document.querySelector(".main-nav");

  menuElement.style.display = !menuElement.style.display || menuElement.style.display === "block"
    ? "none"
    : "block";
}

function initializeMenu() {
  toggleMenu();
}

initializeMenu();
