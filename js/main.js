const collapse = document.querySelector(".navbar-collapse");
const open_button = document.querySelector(".navbar-toggler-icon");
const close_button = document.querySelector(".btn-close");
const body = document.querySelector("body");
const service_modal = document.querySelector(".service-button");
const service_window = document.querySelector(".service-modal-window");
const service_close = document.querySelector(".close-button");
const setListener = (elem, type, hendler) => {
  if(!elem){
    return
  }
  elem.addEventListener(type, hendler)
  return () => {
    elem.removeAddEventListener(type, hendler)
  }
}
setListener(open_button,"click", function () {
    body.classList.add("burger-open");
});

setListener(close_button,"click", function () {
  collapse.classList.remove("show");
  body.classList.remove("burger-open");
});

setListener(service_modal,"click", function () {
    service_modal.classList.add("opened");
    body.classList.add("service-open");
  service_window.classList.add("opened");
  body.classList.add("service-open");
});

setListener(service_close,"click", function () {
  service_window.classList.remove("opened");
  body.classList.remove("service-open");
})