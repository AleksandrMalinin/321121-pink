"use strict";

(function() {
  var menu = document.querySelector(".page-header__wrapper"),
      openMenu = document.querySelector(".page-header__button"),
      toggle = document.querySelector(".page-header__toggle--close"),
      submit = document.querySelector(".form__submit"),
      error = document.querySelector(".popup--error"),
      success = document.querySelector(".popup--success"),
      name = document.querySelector("[name=name]"),
      surname = document.querySelector("[name=surname]"),
      patronymic = document.querySelector("[name=patronymic]"),
      tel = document.querySelector("[name=tel]"),
      email = document.querySelector("[name=email]"),
      closePopupError = document.querySelector(".popup__button--error"),
      closePopupSuccess = document.querySelector(".popup__button--success");

  menu.classList.add("page-header__wrapper--menu-closed");

  openMenu.addEventListener("click", function (evt) {
    toggle.classList.toggle("page-header__toggle--menu-opened");
    menu.classList.toggle("page-header__wrapper--menu-closed");
  });

  if (document.querySelector(".form__submit")) {
    submit.addEventListener("click", function (evt) {
      if (!name.value || !surname.value || !patronymic.value || !tel.value || !email.value) {
        evt.preventDefault();
        error.classList.add("popup--opened");
      } else {
        evt.preventDefault();
        success.classList.add("popup--opened");
      }
    })
  };

  if (document.querySelector(".popup__button--error")) {
    closePopupError.addEventListener("click", function (evt) {
      evt.preventDefault();
      error.classList.remove("popup--opened");
    })
  };

  if (document.querySelector(".popup__button--success")) {
    closePopupSuccess.addEventListener("click", function (evt) {
      evt.preventDefault();
      success.classList.remove("popup--opened");
    })
  };
})();
