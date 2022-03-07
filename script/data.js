// variables
const cardItems = document.querySelector('.card__items');

const buttonEdit = document.querySelector('.profile__edit-btn');
const buttonAdd = document.querySelector('.profile__add-btn');
const userName = document.querySelector('.profile__user-name');
const userAbout = document.querySelector('.profile__user-about');

const popup = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_type_profile');
const popupPhoto = document.querySelector('.popup_type_photo');
const popupFullscreen = document.querySelector('.popup_type_fullscreen');

const popupFormProfile = document.querySelector('.popup__form_type_profile');
const popupFormPhoto = document.querySelector('.popup__form_type_photo');

const popupInputName = document.querySelector('.popup__input_type_user-name');
const popupInputAbout = document.querySelector('.popup__input_type_about-me');

const popupInputCardName = document.querySelector('.popup__input_type_card-name');
const popupInputCardLink = document.querySelector('.popup__input_type_card-link');

const popupFullImg = document.querySelector('.popup__full-img');
const popupFullText = document.querySelector('.popup__full-text');


// config selector validation form
const validationConfig = {
  inputSelector: '.popup__input',
  inputInvalidClass: 'popup__input_type_invalid',
  submitButtonSelector: '.popup__button',
  submitButtonInactiveClass: 'popup__button_type_inactive'
};


// export
export {
  cardItems,
  buttonEdit,
  buttonAdd,
  userName,
  userAbout,
  popup,
  popupProfile,
  popupPhoto,
  popupFullscreen,
  popupFormProfile,
  popupFormPhoto,
  popupInputName,
  popupInputAbout,
  popupInputCardName,
  popupInputCardLink,
  popupFullImg,
  popupFullText,
  validationConfig,
};
