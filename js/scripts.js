"use strict"

const modalBtn = document.querySelector(".btn-add-list-item"),
  modalWindow = document.querySelector(".modal"),
  modalClose = modalWindow.querySelector(".modal-header__close"),
  modalInput = modalWindow.querySelector(".modal__input"),
  modalSubmit = modalWindow.querySelector(".modal__submit");

const tasks = [
  {id: 0, task: "Проснуться"},
  {id: 1, task: "Умыться"},
  {id: 2, task: "Позавтракать"}
]

//Открываем модальное окно
modalBtn.addEventListener("click", () => {
  modalWindow.style.display = "flex";
});

//Закрываем модальное окно
modalClose.addEventListener("click", () => {
  modalWindow.style.display = "none";
});

modalSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(modalInput.value)
});

