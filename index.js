console.log("javascript linked");
const mainContent = document.querySelector(".main-content");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");
const gifChange = document.querySelector(".gif-default");
const bodyDimension = document.querySelector("body");
const originalHeading = document.querySelector(".first");
const changedHeading = document.querySelector(".second");
function changeGif() {
  console.log(gifChange.getAttribute);
  gifChange.setAttribute("src", "images/gifchange-bg-removed.gif");
  originalHeading.classList.add("hidden");
  changedHeading.classList.remove("hidden");
}
yesBtn.addEventListener("click", changeGif);

const noBtnDimensions = noBtn.getBoundingClientRect();
const divDimensions = mainContent.getBoundingClientRect();
const maxWidth = divDimensions.width - noBtnDimensions.width;
const maxHeight = divDimensions.height - noBtnDimensions.height;
// console.log(noBtnDimensions);

function dimensionChange() {
  const x = Math.floor(Math.random() * 400) + 100;
  const y = Math.floor(Math.random() * 400) + 100;
  noBtn.style.left = x + "px";
  noBtn.style.top = x + "px";
}
noBtn.addEventListener("mouseover", dimensionChange);
