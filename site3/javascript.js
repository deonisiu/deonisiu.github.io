/**
 * Created by denis on 10.10.2018.
 */
var modal_record_btn = document.querySelector(".registration__button");
var modal_record = document.querySelector(".modal-record");

modal_record_btn.addEventListener("click", function (event) {
  event.preventDefault();
  modal_record.classList.toggle("modal--show");
});
