/*-----------Navbar Script-------------- */

const ele = document.getElementById("hamburger");
const nav = document.getElementsByClassName("nav-div")[0]; // Assuming you want to select the first element with the class 'nav-div'

ele.addEventListener("click", () => {
  if (nav.style.right === "0px") {
    nav.style.right = "-1000px";
  } else {
    nav.style.right = "0px";
  }
});

/*-------------Theme Changing Script----------*/

const themeToggle = document.getElementById("theme-toggle");
const themeLink = document.getElementById("theme-link");
let isDarkMode = false;

themeToggle.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    themeLink.href = "dark.css";
    themeToggle.innerHTML = "🌙";
    document.body.style.transition = "2s";
  } else {
    themeLink.href = "index.css";
    themeToggle.innerHTML = "☀️";
    document.body.style.transition = "2s";
  }
});
