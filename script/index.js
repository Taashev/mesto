// import
import * as data from './data.js';
import {FormValidator} from './FormValidator.js';
import {Card} from './Card.js';
import { initialCards} from './cardDefault.js';


// validation form profile
const validatorFormProfile = new FormValidator('.popup__form_type_profile', data.validationConfig);

// validation form photo
const validatorFormPhoto = new FormValidator('.popup__form_type_photo', data.validationConfig);


// popup open
const openPopup = popupElement =>  {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keyup', closePopupEsc);
};

// open popup edit profile
data.buttonEdit.addEventListener('click', () => {
  data.popupInputName.value = data.userName.textContent;
  data.popupInputAbout.value = data.userAbout.textContent;

  validatorFormProfile.enableValidation();
  openPopup(data.popupProfile);
});

// open popup add photo
data.buttonAdd.addEventListener('click', () => {
  data.popupInputCardName.value = '';
  data.popupInputCardLink.value = '';

  validatorFormPhoto.enableValidation();
  openPopup(data.popupPhoto);
});


// popup close
const closePopup = popupElement => {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keyup', closePopupEsc);
};

// popup close key Esc
const closePopupEsc = event => {
  if (event.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
};

// popup close click overlay
const closePopupOverlay = event => {
  if (event.target.classList.contains('popup')) {
    closePopup(event.target);
  }
};

// popup close click button
const closePopupButton = event => {
  if (event.target.classList.contains('popup__close')) {
    closePopup(event.currentTarget);
  }
};

// sete event listener popup close
const setEventListenerPopupClose = () => {
  const popupList = Array.from(data.popup);

  popupList.forEach(popupElement => {
    popupElement.addEventListener('mousedown', event => {
      closePopupOverlay(event);
      closePopupButton(event);
    });
  });
};
setEventListenerPopupClose();


// handler form profile
const formSubmitHandlerProfile = evt => {
  evt.preventDefault();
  evt.currentTarget.propaga
  data.userName.textContent = data.popupInputName.value;
  data.userAbout.textContent = data.popupInputAbout.value;

  closePopup(data.popupProfile);
};
data.popupFormProfile.addEventListener('submit', formSubmitHandlerProfile);

// handler form photo
const formSubmitHandlerAddCard = evt => {
  evt.preventDefault();
  const card = new Card(data.popupInputCardName.value, data.popupInputCardLink.value, '.card-template');
  const cardElement = card.renderCard();
  addCard(cardElement);

  closePopup(data.popupPhoto);
  data.popupFormPhoto.reset();
};
data.popupFormPhoto.addEventListener('submit', formSubmitHandlerAddCard);


// add Card
const addCard = card => {
  data.cardItems.prepend(card);
};

// initial card default
initialCards.forEach( item => {
  const card = new Card(item.text, item.image, '.card-template');
  const cardElement = card.renderCard();

  addCard(cardElement);
});


// export
export {
  addCard,
  openPopup,
};
