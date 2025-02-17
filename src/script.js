import { rtContent, fmbContent, rlContent, shContent } from "./modalContent.js";

// flickity carousel options
const element = document.querySelector(".main-carousel");
const flkty = new Flickity(element, {
  contain: true,
  wrapAround: true,
  autoPlay: true,
});

// tingle modal options
const modalOptions = {
  footer: false,
  closeMethods: ["overlay", "button", "escape"],
  closeLabel: "Close",
  cssClass: ["modalClass"],
};

const rtModal = new tingle.modal(modalOptions);
const fmbModal = new tingle.modal(modalOptions);
const rlModal = new tingle.modal(modalOptions);
const shModal = new tingle.modal(modalOptions);

rtModal.setContent(rtContent);
const roboTrivia = document.querySelectorAll(".rtContainer");
roboTrivia.forEach((rtProject) =>{
  rtProject.addEventListener("click", () => rtModal.open());
});

fmbModal.setContent(fmbContent);
const findMyBeer = document.querySelectorAll(".fmbContainer");
findMyBeer.forEach((fmbProject) => {
  fmbProject.addEventListener("click", () => fmbModal.open());
});

rlModal.setContent(rlContent);
const recipeLookup = document.querySelectorAll(".rlContainer");
recipeLookup.forEach((rlProject) => {
  rlProject.addEventListener("click", () => rlModal.open());
})

shModal.setContent(shContent);
const sanctuaryHelper = document.querySelectorAll(".shContainer");
sanctuaryHelper.forEach((shProject) => {
  shProject.addEventListener("click", () => shModal.open());
});



// darkMode toggle function
// const checkbox = document.getElementById("checkbox");

// checkbox.onchange = () => {
//   const bodyElement = document.querySelector("body");
//   bodyElement.classList.toggle("bodyDark");

//   const folderContainer = document.querySelector(".folderContainer");
//   folderContainer.classList.toggle("darkFolder");

//   const fmbLight = document.querySelectorAll(".light");
//   fmbLight.forEach((video) => {
//     video.classList.toggle("displayOff");
//   });

//   const fmbDark = document.querySelectorAll(".dark");
//   fmbDark.forEach((video) => {
//     video.classList.toggle("displayOn");
//   });

//   const h1Element = document.querySelector("h1");
//   h1Element.classList.toggle("h1Dark");

//   const socialIcons = document.querySelectorAll(".socialIcons");
//   socialIcons.forEach((socialIconEl) => {
//     socialIconEl.classList.toggle("darkSocial");
//   });

//   const h3Element = document.querySelectorAll("h3");
//   h3Element.forEach((h3) => {
//     h3.classList.toggle("h3Dark");
//   });

//   const nextButton = document.querySelectorAll(".flickity-prev-next-button");
//   nextButton.forEach((nextBtn) => {
//     nextBtn.classList.toggle("darkButtons");
//   });

//   const inputElement = document.querySelectorAll("input");
//   inputElement.forEach((input) => {
//     input.classList.toggle("darkInput");
//   });

//   const textareaEl = document.querySelector("textarea");
//   textareaEl.classList.toggle("darkTextarea");

//   const modalEl = document.querySelector(".tingle-modal-box");
//   modalEl.classList.toggle("darkModal")
// };
