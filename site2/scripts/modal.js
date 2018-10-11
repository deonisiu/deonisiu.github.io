var modal_mail = document.querySelector(".modal-mail");
var modal_mail_close = modal_mail.querySelector(".modal__close");
var contacts__button = document.querySelector(".contacts__description a");

contacts__button.addEventListener("click", function (event) {
	event.preventDefault();
	modal_mail.classList.add("modal--show");
},);

modal_mail_close.addEventListener("click", function (event) {
	event.preventDefault();
	modal_mail.classList.remove("modal--show"); 
},);


var slider_btn1 = document.querySelector(".slider__button_1");
var slider_btn2 = document.querySelector(".slider__button_2");
var slider_btn3 = document.querySelector(".slider__button_3");

var slide_1 = document.querySelector(".slide_1");
var slide_2 = document.querySelector(".slide_2");
var slide_3 = document.querySelector(".slide_3");

slider_btn1.classList.add("slider__button--active");

slider_btn1.addEventListener("click", function (event) {
	event.preventDefault();
	slide_1.classList.add("slide--show");
	slide_2.classList.remove("slide--show");
	slide_3.classList.remove("slide--show");

	slider_btn1.classList.add("slider__button--active");
	slider_btn2.classList.remove("slider__button--active");
	slider_btn3.classList.remove("slider__button--active");
},);

slider_btn2.addEventListener("click", function (event) {
	event.preventDefault();
	slide_2.classList.add("slide--show");
	slide_1.classList.remove("slide--show");
	slide_3.classList.remove("slide--show");

	slider_btn2.classList.add("slider__button--active");
	slider_btn1.classList.remove("slider__button--active");
	slider_btn3.classList.remove("slider__button--active");
},);

slider_btn3.addEventListener("click", function (event) {
	event.preventDefault();
	slide_3.classList.add("slide--show");
	slide_2.classList.remove("slide--show");
	slide_1.classList.remove("slide--show");

	slider_btn3.classList.add("slider__button--active");
	slider_btn2.classList.remove("slider__button--active");
	slider_btn1.classList.remove("slider__button--active");
},);