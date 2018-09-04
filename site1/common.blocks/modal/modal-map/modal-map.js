/**
 * Created by denis on 04.09.2018.
 */
var modal_map = document.querySelector(".modal-map");
var modal_map_close = modal_map.querySelector(".modal__close");

var map_button = document.querySelector(".js_button-map");

map_button.addEventListener("click", function ( event ) {
    event.preventDefault();
    modal_map.classList.toggle("modal--show");
});

modal_map_close.addEventListener("click", function ( event ) {
    event.preventDefault();
    modal_map.classList.toggle("modal--show");
});