let body = document.querySelector('body');
let page = document.querySelector('.page');
let buttonEdit = page.querySelector('.profile__edit-btn')
let popupButtonClose = page.querySelector('.popup__close');
let popupButtonSubmit = page.querySelector('.popup__submit')
let popupProfile = page.querySelector('.popup_type_profile');
let profileUserName = page.querySelector('.profile__user-name');
let profileUserAbout = page.querySelector('.profile__user-about');


// popup profile open end close
  buttonEdit.addEventListener('click', function() {
    body.classList.add('body_no-scroll');
    popupProfile.classList.toggle('popup_opened');

    nameInput.value = profileUserName.textContent;
    jobInput.value = profileUserAbout.textContent;
  });

  function popupClose(button) {
    button.addEventListener('click', function() {
      body.classList.remove('body_no-scroll');
      popupProfile.classList.remove('popup_opened');
    });
  };

  popupClose(popupButtonClose);
  popupClose(popupButtonSubmit);


// save edit form profile
let formElement = page.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__user-name');
let jobInput = formElement.querySelector('.popup__about-me');

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
