// var link = document.querySelector(".footer-contacts-button");
// var popup = document.querySelector(".modal");
// var close = popup.querySelector(".modal-close");
// var modalOverlay = document.querySelector("#modal-overlay");
// var form = popup.querySelector("form");
// var login = popup.querySelector("[name=login]");
// var password = popup.querySelector("[name=email]");
// var comment = popup.querySelector("[name=comment]");
// var isStorageSupport = true;
// var storage = "";
// try {
//   storage = localStorage.getItem("name");
// } catch (err) {
//   isStorageSupport = false;
// }
// link.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   popup.classList.add("modal-show");
//   modalOverlay.classList.add("overlay-show");
//   if (storage) {
//     login.value = storage;
//     password.focus();
//   } else {
//     login.focus();
//   }
// });
// modalOverlay.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   modalOverlay.classList.remove("overlay-show");
//   popup.classList.remove("modal-show");
// });
// close.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   popup.classList.remove("modal-show");
//   popup.classList.remove("modal-error");
// });
// form.addEventListener("submit", function(evt) {
//   if (!login.value || !password.value || !comment.value) {
//     evt.preventDefault();
//     popup.classList.remove("modal-error");
//     popup.offsetWidth = popup.offsetWidth;
//     popup.classList.add("modal-error");
//   } else {
//     if (isStorageSupport) {
//       localStorage.setItem("login", login.value);
//     }
//   }
// });
// window.addEventListener("keydown", function(evt) {
//   if (evt.keyCode === 27) {
//     evt.preventDefault();
//     if (popup.classList.contains("modal-show")) {
//       popup.classList.remove("modal-show");
//       popup.classList.remove("modal-error");
//     }
//   }
// });
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