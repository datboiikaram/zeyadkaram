const logo = document.querySelector(".mainLogo");
logo.addEventListener("click", () => {
  alert("You're in the Home page ");
});
const oskarKadera = document.querySelector(".projectOne");
const oskarKaderaLink = document.querySelector(".projectOneButton");
oskarKadera.addEventListener("click", () => {
  oskarKaderaLink.click();
});

const Ginseo = document.querySelector(".projectTwo");
const GinseoLink = document.querySelector(".projectTwoButton");
Ginseo.addEventListener("click", () => {
  GinseoLink.click();
});

const iceCream = document.querySelector(".projectThree");
const iceCreamLink = document.querySelector(".projectThreeButton");
iceCream.addEventListener("click", () => {
  iceCreamLink.click();
});
