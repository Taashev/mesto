let body = document.querySelector('body');
let page = document.querySelector('.page');
// let profile
let buttonEdit = page.querySelector('.profile__edit-btn')
let profileUserName = page.querySelector('.profile__user-name');
let profileUserAbout = page.querySelector('.profile__user-about');
// let popup
let popup = page.querySelector('.popup');
let popupForm = popup.querySelector('.popup__container');
let popupButtonClose = popupForm.querySelector('.popup__close');
let popupButtonSubmit = popupForm.querySelector('.popup__submit')
// let popup edit profile
let popupProfile = page.querySelector('.popup_type_profile');
let popupNameInput = popupProfile.querySelector('.popup__user-name');
let popupAboutMeInput = popupProfile.querySelector('.popup__about-me');


// popup open
buttonEdit.addEventListener('click', function() {
  body.classList.add('body_no-scroll');
  popupProfile.classList.toggle('popup_opened');

  popupNameInput.value = profileUserName.textContent;
  popupAboutMeInput.value = profileUserAbout.textContent;
});


// popup close
popupButtonClose.addEventListener('click', function() {
  body.classList.remove('body_no-scroll');
  popupProfile.classList.remove('popup_opened');
});


// popup btn submit
popupButtonSubmit.addEventListener('click', function() {
  let validationInputName = popupNameInput.value.length;

  if (validationInputName > 0) {
    body.classList.remove('body_no-scroll');
    popupProfile.classList.remove('popup_opened');
  }
});


// handler form
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  profileUserName.textContent = popupNameInput.value;
  profileUserAbout.textContent = popupAboutMeInput.value;
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
popupForm.addEventListener('submit', formSubmitHandler);
