/**
 * Created by denis on 04.09.2018.
 */
var modal_login = document.querySelector(".modal-login");
var modal_login_close = modal_login.querySelector(".modal__close");

var nav_user = document.querySelector(".nav--user");

nav_user.addEventListener("click", function ( event ) {
    event.preventDefault();
    modal_login.classList.toggle("modal--show");
    modal_login.querySelector("#input-login").focus();

    if(!modal_login.classList.contains("modal--show-animation")){
        modal_login.classList.add("modal--show-animation");
    }
});

modal_login_close.addEventListener("click", function ( event ) {
    event.preventDefault();
    modal_login.classList.toggle("modal--show");
});

modal_login.addEventListener("animationend", function ( event ) {
    if(event.animationName == "bounce"){
        modal_login.classList.remove("modal--show-animation");
    }
});