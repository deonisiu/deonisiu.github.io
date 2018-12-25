/**
 * Created by denis on 04.09.2018.
 */
window.addEventListener("keydown", function ( event ) {
    if(event.keyCode === 27){
        event.preventDefault();
        var modal_arr = document.querySelectorAll(".modal--show");
        for(var i=0; i<modal_arr.length; i++){
            modal_arr[ i ].classList.remove("modal--show");
        }
    }
});