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