const openbtn = document.querySelector("#openPopup");

const popup = document.querySelector("#popup");

const closePopup = document.querySelector("#closePopup");

openbtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});
