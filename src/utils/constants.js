// variables
export const cardItems = document.querySelector('.card__items');

export const buttonEdit = document.querySelector('.profile__edit-btn');
export const buttonAdd = document.querySelector('.profile__add-btn');
export const userName = document.querySelector('.profile__user-name');
export const userAbout = document.querySelector('.profile__user-about');

export const popupProfile = document.querySelector('.popup_type_profile');
export const popupPhoto = document.querySelector('.popup_type_photo');
export const popupFullscreen = document.querySelector('.popup_type_fullscreen');

export const popupInputName = document.querySelector('.popup__input_type_user-name');
export const popupInputAbout = document.querySelector('.popup__input_type_about-me');


// config selector validation form
export const validationConfig = {
  inputSelector: '.popup__input',
  inputInvalidClass: 'popup__input_type_invalid',
  submitButtonSelector: '.popup__button',
  submitButtonInactiveClass: 'popup__button_type_inactive'
};
