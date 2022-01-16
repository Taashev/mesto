let body = document.querySelector('body');
let page = document.querySelector('.page');


// popup Open end Close
let buttonEdit = page.querySelector('.profile__edit-btn')
let popupProfile = page.querySelector('.popup_type_profile');

function popupOpen(btn, popup) {
  btn.addEventListener('click', function() {
    body.classList.add('body_no-scroll');
    popup.classList.toggle('popup_opened');
  });
};

popupOpen(buttonEdit, popupProfile);

function popupClose(popup) {
  let popupButtonClose = page.querySelector('.popup__close');

  popupButtonClose.addEventListener('click', function() {
    body.classList.remove('body_no-scroll');
    popup.classList.remove('popup_opened');
  });
};

popupClose(popupProfile);


// save profile changes
// Находим форму в DOM
let formElement = page.querySelector('.popup__container');
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__user-name');
let jobInput = formElement.querySelector('.popup__about-me');

let profileUserName = page.querySelector('.profile__user-name');
let profileUserAbout = page.querySelector('.profile__user-about');
nameInput.value = profileUserName.textContent;
jobInput.value = profileUserAbout.textContent;

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  // Получите значение полей jobInput и nameInput из свойства value
  let nameInputValue = nameInput.value;
  let jobInputValue = jobInput.value;
  // Вставьте новые значения с помощью textContent
  profileUserName.textContent = nameInputValue;
  profileUserAbout.textContent = jobInputValue;
}



// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
