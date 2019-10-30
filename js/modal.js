var link = document.querySelector(".footer-contacts-button");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var modalOverlay = document.querySelector("#modal-overlay");
var login = popup.querySelector("[name=name]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  modalOverlay.classList.add("overlay-show");
  login.focus();
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

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
    // alert("Заполните поля формы")
  }
});


var mapOpen = document.querySelector(".map");
var mapPopup = document.querySelector(".map-show");
var mapClose = mapPopup.querySelector(".close");
var modalOverlay = document.querySelector(".modal-overlay");

mapOpen.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.add("content-show")
  modalOverlay.classList.add("overlay-show");
});

mapClose.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.remove("content-show")
});

modalOverlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalOverlay.classList.remove("overlay-show");
  mapPopup.classList.remove("content-show")
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("content-show")) {
      mapPopup.classList.remove("content-show")
    }
  }
});