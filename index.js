const ele = document.getElementById("hamburger");
const nav = document.getElementsByClassName("nav-div")[0]; // Assuming you want to select the first element with the class 'nav-div'

ele.addEventListener("click", () => {
  if (nav.style.right === "0px") {
    nav.style.right = "-1000px";
  } else {
    nav.style.right = "0px";
  }
});
