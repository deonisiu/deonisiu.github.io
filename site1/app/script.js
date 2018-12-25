/**
 * Start scripts
 */
'use strict';
window.onload = function () {
    // Modal ESC button listener
    window.addEventListener("keydown", function (event) {
        if(event.keyCode === 27){
            event.preventDefault();
            modalLogin.classList.remove("modal--show");
            modalMap.classList.remove("modal--show");
            tip.classList.remove("text--color-red");
            tip.innerHTML = "ВВЕДИТЕ ПОЖАЛУЙСТА СВОЙ ЛОГИН И ПАРОЛЬ";
        }
    });
    /**
     * Created by Deonisiu on 25.12.2018.
     */
    // Modal Login
    var loginBtn = document.querySelector(".header__button--login");
    var modalLogin = document.querySelector(".modal-login");
    var modalLoginClose = modalLogin.querySelector(".modal-close");
    var form = modalLogin.querySelector(".modal-login__form");
    var login = modalLogin.querySelector("[name=login]");
    var password = modalLogin.querySelector("[name=password]");
    var tip = modalLogin.querySelector("p");

    loginBtn.addEventListener("click", function (event) {
        event.preventDefault();
        modalLogin.classList.add("modal--show");
    });

    modalLoginClose.addEventListener("click", function (event) {
        event.preventDefault();
        modalLogin.classList.remove("modal--show");
        tip.classList.remove("text--color-red");
        tip.innerHTML = "ВВЕДИТЕ ПОЖАЛУЙСТА СВОЙ ЛОГИН И ПАРОЛЬ";
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if(login.value && password.value){
            tip.classList.remove("text--color-red");
            tip.innerHTML = "Идёт проверка логина и пароля... (Нет не идёт)";
        } else {
            tip.classList.add("text--color-red");
            tip.innerHTML = "Не указан логин или пароль!";
            console.log(tip.innerHTML);
        }
    });
    /**
     * Created by Deonisiu on 25.12.2018.
     */
    // Modal Map
    var modalMap = document.querySelector(".modal-map");
    var modalMapClose = modalMap.querySelector(".modal-close");
    var modalMapBtn = document.querySelector(".contacts__button");

    modalMapBtn.addEventListener("click", function (event) {
        event.preventDefault();
        modalMap.classList.add("modal--show");
    });

    modalMapClose.addEventListener("click", function (event) {
        event.preventDefault();
        modalMap.classList.remove("modal--show");
    });
};
/**
 * End scripts
 */