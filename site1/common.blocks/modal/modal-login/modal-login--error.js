/**
 * Created by denis on 04.09.2018.
 */
var modal_login = document.querySelector(".modal-login");
var form = modal_login.querySelector("form");

var login = form.querySelector("[ name='login' ]");
var password = form.querySelector( "[ name='password' ]" )

form.addEventListener("submit", function ( event ) {
    if(!login.value || !password.value){
        event.preventDefault();
        modal_login.classList.add("modal--error");
    }
});

modal_login.addEventListener("animationend", function ( event ) {
    console.log(event.animationName);
    modal_login.classList.remove("modal--error");
});