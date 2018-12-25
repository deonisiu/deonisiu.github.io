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