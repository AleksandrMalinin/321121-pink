"use strict";

(function() {
  var menu = document.querySelector(".page-header__wrapper"),
      openMenu = document.querySelector(".page-header__toggle--open"),
      toggle = document.querySelector(".page-header__toggle--close"),
      closeMenu = document.querySelector(".page-header__toggle--close"),
      submit = document.querySelector(".form__submit"),
      error = document.querySelector(".popup--error"),
      success = document.querySelector(".popup--success"),
      name = document.querySelector("[name=name]"),
      surname = document.querySelector("[name=surname]"),
      patronymic = document.querySelector("[name=patronymic]"),
      tel = document.querySelector("[name=tel]"),
      email = document.querySelector("[name=email]"),
      closePopup = document.querySelector(".popup__button");

  menu.classList.add("page-header__wrapper--menu-closed");

  openMenu.addEventListener("click", function (evt) {
    evt.preventDefault();
    menu.classList.remove("page-header__wrapper--menu-closed");
    toggle.classList.add("page-header__toggle--menu-opened");
  });

  closeMenu.addEventListener("click", function (evt) {
    evt.preventDefault();
    menu.classList.add("page-header__wrapper--menu-closed");
  });

  submit.addEventListener("click", function (evt) {
    if (!name.value || !surname.value || !patronymic.value || !tel.value || !email.value) {
      evt.preventDefault();
      error.classList.add("popup--opened");
    } else {
      evt.preventDefault();
      success.classList.add("popup--opened");
    }
  });

  closePopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    error.classList.remove("popup--opened");
    success.classList.remove("popup--opened");
  });
})();
