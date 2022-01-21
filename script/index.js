let page = document.querySelector('.page');
// let profile
let buttonEdit = page.querySelector('.profile__edit-btn')
let userName = page.querySelector('.profile__user-name');
let userAbout = page.querySelector('.profile__user-about');
// let popup
let popup = page.querySelector('.popup');
let popupForm = page.querySelector('.popup__form');
let popupButtonClose = page.querySelector('.popup__close');
// let popup edit profile
let popupInputName = page.querySelector('.popup__input_type_user-name');
let popupInputAbout = page.querySelector('.popup__input_type_about-me');

// popup open
function popupOpen() {
  popup.classList.add('popup_opened');
  popupInputName.value = userName.textContent;
  popupInputAbout.value = userAbout.textContent;
};

buttonEdit.addEventListener('click', popupOpen);

// popup close
function popupClose() {
  popup.classList.remove('popup_opened');
}

popupButtonClose.addEventListener('click', popupClose);

// handler form
function formSubmitHandler(evt) {
  evt.preventDefault();
  userName.textContent = popupInputName.value;
  userAbout.textContent = popupInputAbout.value;
  popupClose();
}

popupForm.addEventListener('submit', formSubmitHandler);
