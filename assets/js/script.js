/*============= Show Navigation Menu=================*/
const showNavigationMenu = (toggleId, menuId) => {
  const navToggle = document.getElementById(toggleId),
    navMenu = document.getElementById(menuId);
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show-menu");
    });
  }
};

showNavigationMenu("nav-toggle", "nav-menu");
showNavigationMenu("nav-close", "nav-menu");

//theme selection

const themSelector = document.getElementById("theme-selector");
const darkThemeClass = "dark-theme";
const darkThemeIcon = "uil-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkThemeClass) ? "dark" : "light";

const getCurrentIcon = () =>
  themSelector.classList.contains(darkThemeIcon) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkThemeClass
  );
  themSelector.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    darkThemeIcon
  );
}

themSelector.addEventListener("click", () => {
  document.body.classList.toggle(darkThemeClass);
  themSelector.classList.toggle(darkThemeIcon);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-theme", getCurrentIcon());
});

function resize() {
  console.log("downlaod resize");
  document.body.classList.add("resize-capture-area");
}

function removeResize() {
  document.body.classList.remove("resize-capture-area");
}

let captureArea = document.getElementById("capture-area");

function generateResume() {
  html2pdf(captureArea);
}

let download = document.getElementById("generate-profile-pdf");
download.addEventListener("click", () => {
  console.log("downlaod");
  //resize();
  generateResume();
  //removeResize();
});
