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