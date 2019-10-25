var link = document.querySelector(".footer-contacts-button");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var modalOverlay = document.querySelector("#modal-overlay");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  modalOverlay.classList.add("overlay-show");
});

modalOverlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalOverlay.classList.remove("overlay-show");
  popup.classList.remove("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

