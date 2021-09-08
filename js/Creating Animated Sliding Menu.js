let linksArray = document.querySelectorAll(".nav a");
let indicator = document.querySelector(".indicator");

linksArray.forEach((link) => {
  link.addEventListener("click", (e) => {
    indicatorFunc(e.target);
  });
});

function indicatorFunc(element) {
  indicator.style.left = element.offsetLeft + "px";
  indicator.style.width = element.offsetWidth + "px";
}
