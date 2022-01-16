let body = document.querySelector('body');
let page = document.querySelector('.page');
let buttonEdit = page.querySelector('.profile__edit-btn')
let popupEditProfile = page.querySelector('.popup_type_profile');


// popupOpen
function popupOpen(btnOpen, open) {
  btnOpen.addEventListener('click', function() {
    body.classList.add('body_no-scroll');
    open.classList.toggle('popup_opened');
  });
};

popupOpen(buttonEdit, popupEditProfile);

// popupClose
function popupClose(popClose) {
  let popupClose = page.querySelector('.popup__close');

  popupClose.addEventListener('click', function () {
    body.classList.remove('body_no-scroll');
    popClose.classList.remove('popup_opened');
  });
};

popupClose(popupEditProfile);


// save profile changes
// Находим форму в DOM
let formElement = page.querySelector('.popup__container');
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__user-name');
let jobInput = formElement.querySelector('.popup__about-me');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  // Получите значение полей jobInput и nameInput из свойства value
  let nameInputValue = nameInput.value;
  let jobInputValue = jobInput.value;
  // Выберите элементы, куда должны быть вставлены значения полей
  let profileTitle = page.querySelector('.profile__title');
  let profileSubtitle = page.querySelector('.profile__subtitle');
  // Вставьте новые значения с помощью textContent
  profileTitle.textContent = nameInputValue;
  profileSubtitle.textContent = jobInputValue;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
