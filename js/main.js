const collapse = document.querySelector(".navbar-collapse");
const open_button = document.querySelector(".navbar-toggler-icon");
const close_button = document.querySelector(".btn-close");
const body = document.querySelector("body");
const service_modal = document.querySelector(".service-button");
const service_window = document.querySelector(".service-modal-window");
const service_close = document.querySelector(".close-button");

open_button.addEventListener("click", function () {
  body.classList.add("burger-open");
});

close_button.addEventListener("click", function () {
  collapse.classList.remove("show");
  body.classList.remove("burger-open");
});

service_modal.addEventListener("click", function () {
  service_window.classList.add("opened");
  body.classList.add("service-open");
});

service_close.addEventListener("click", function () {
  service_window.classList.remove("opened");
  body.classList.remove("service-open");
})