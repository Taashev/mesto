let body = document.querySelector('body');
let page = document.querySelector('.page');
// let profile
let buttonEdit = page.querySelector('.profile__edit-btn')
let UserName = page.querySelector('.profile__user-name');
let UserAbout = page.querySelector('.profile__user-about');
// let popup
let popup = page.querySelector('.popup');
let popupForm = page.querySelector('.popup__form');
let popupButtonClose = page.querySelector('.popup__close');
let popupButtonSave = page.querySelector('.popup__button_type_save')
// let popup edit profile
let popupProfile = page.querySelector('.popup_type_profile');
let popupInputName = page.querySelector('.popup__user-name');
let popupInputAbout = page.querySelector('.popup__about-me');


// открыть попап
function popupOpen(pop) {
  // открываем переданный попап
  pop.classList.add('popup_opened');
  // отключаем скролл страницы
  body.classList.add('body_no-scroll');

  // если открыт попап ред.проф. передаем "имя" и "о себе" со страницы в значения инпут
  if (pop === popupProfile) {
    popupInputName.value = UserName.textContent;
    popupInputAbout.value = UserAbout.textContent;
  }
};

// открыть попап ред.проф.
buttonEdit.addEventListener('click', function() {
  popupOpen(popupProfile);
});


// закрыть попап
popupButtonClose.addEventListener('click', function() {
    // закрываем попап
    popup.classList.remove('popup_opened');
    // включаем скролл страницы
    body.classList.remove('body_no-scroll');
});



// handler form
function formSubmitHandler(evt) {
  // Эта строчка отменяет стандартную отправку формы.
  evt.preventDefault();

  // передаем внесенные изминения "имя" и "о себе" на страницу
  UserName.textContent = popupInputName.value;
  UserAbout.textContent = popupInputAbout.value;

  // валидация инпут "имя" на пустое поле
  let validationInputName = popupInputName.value.length;

  if (validationInputName > 0) {
    body.classList.remove('body_no-scroll');
    popupProfile.classList.remove('popup_opened');
  }
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
popupForm.addEventListener('submit', formSubmitHandler);
