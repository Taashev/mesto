import './index.css';

// import
import * as constants from '../utils/constants.js';
import Card from '../components/Card.js';
import { initialCards } from '../utils/cardDefault.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import importImage from '../utils/importImage.js';


// User Info
const userInfo = new UserInfo (constants.userName, constants.userAbout);


// popup fullscreen
const popupFullImg = new PopupWithImage(constants.popupFullscreen);
popupFullImg.setEventListener();


// validation form profile
const validatorFormProfile = new FormValidator('.popup__form_type_profile', constants.validationConfig);
validatorFormProfile.enableValidation();

// validation form photo
const validatorFormPhoto = new FormValidator('.popup__form_type_photo', constants.validationConfig);
validatorFormPhoto.enableValidation();


// Popup Profile
const popupProfile = new PopupWithForm({
  popupSelector: constants.popupProfile,
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(
      {
        name: formData.username,
        about: formData.aboutme
      }
    );
  }
});
popupProfile.setEventListener();


// Popup Photo
const popupPhoto = new PopupWithForm({
  popupSelector: constants.popupPhoto,
  handleFormSubmit: (formData) => {
    cardAdd.renderItems(
      [
        {
          text: formData.cardname,
          image: formData.cardlink,
        }
      ]
    );
  }
});
popupPhoto.setEventListener();


// open popup edit profile
constants.buttonEdit.addEventListener('click', () => {
  constants.popupInputName.value = userInfo.getUserInfo().name;
  constants.popupInputAbout.value = userInfo.getUserInfo().about;

  validatorFormProfile.resetValidation();
  popupProfile.open();
});


// open popup add photo
constants.buttonAdd.addEventListener('click', () => {
  validatorFormPhoto.resetValidation();
  popupPhoto.open();
});


// handleCardClick
const handleCardClick = (text, image) => {
  popupFullImg.open(text, image);
};


// creat Card
const creatCard = (text, image) => {
  const card = new Card(text, image, '.card-template', handleCardClick);
  const cardElement = card.renderCard();
  return cardElement;
};


// Card Add
const cardAdd = new Section ({ renderer: (item) => {
      const card = creatCard(item.text, item.image);
      cardAdd.addItem(card);
    }
  },
  constants.cardItems
);
cardAdd.renderItems(initialCards);
