import './index.css';

// import
import * as constants from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';


// api
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39/',
  headers: {
    authorization: 'b52f2582-d828-40bf-8301-f8f9457aa9d0',
    'Content-type': 'application/json'
  }
});

// user id
let userId;

// User Info
const userInfo = new UserInfo (constants.userName, constants.userAbout, constants.userAvatar);


// validation form avatar
const validatorFormAvatar = new FormValidator('.popup__form_type_update-avatar', constants.validationConfig);
validatorFormAvatar.enableValidation();

// validation form profile
const validatorFormProfile = new FormValidator('.popup__form_type_profile', constants.validationConfig);
validatorFormProfile.enableValidation();

// validation form photo
const validatorFormPhoto = new FormValidator('.popup__form_type_photo', constants.validationConfig);
validatorFormPhoto.enableValidation();


// popup fullscreen
const popupFullImg = new PopupWithImage(constants.popupFullscreen);
popupFullImg.setEventListener();


// popup avatar
const popupAvatar = new PopupWithForm({
  popupSelector: constants.popupAvatar,
  handleFormSubmit: (inputValues, loading) => {
    loading(true);

    api.setUserAvatar(inputValues.avatar)
      .then(res => {
        userInfo.setUserAvatar(res.avatar);
        popupAvatar.close();
      })
      .catch(err => console.error(`Ошибка: ${err}`))
      .finally( _ => loading(false))
  }
});
popupAvatar.setEventListener();


// popup profile
const popupProfile = new PopupWithForm({
  popupSelector: constants.popupProfile,
  handleFormSubmit: (inputValues, loading) => {
    loading(true);

    api.setUserInfo(inputValues.username, inputValues.aboutme)
      .then(res => {
        userInfo.setUserInfo({
          name: res.name,
          about: res.about
        });
      })
      .then( _ => popupProfile.close())
      .catch(err => console.error(`Ошибка: ${err}`))
      .finally( _ => loading(false))
  }
});
popupProfile.setEventListener();


// popup photo
const popupPhoto = new PopupWithForm({
  popupSelector: constants.popupPhoto,
  handleFormSubmit: (inputValues, loading) => {
    loading(true);

    api.setCard(inputValues.cardname, inputValues.cardlink)
      .then(res => cardAdd.renderItems([ res ]))
      .then( _ => popupPhoto.close())
      .catch(err => console.error(`Ошибка: ${err}`))
      .finally( _ => loading(false))
		}
});
popupPhoto.setEventListener();


// popup card delete
const popupCardDelete = new PopupWithConfirmation(constants.popupCardDelete, {
    handleFormSubmit: (card, cardId, loading) => {
      loading(
        /* toggle: */ true,
        /* text-loading: */ 'Удаление...'
      );

      api.deleteCard(cardId)
      .then( _ => card.handleDelete())
      .then( _ => popupCardDelete.close())
      .catch(err => console.error(`Ошибка: ${err}`))
      .finally( _ => loading(
        /* toggle: */ false,
        /* loading: */ _,
        /* text-static: */ 'Да'
        ))
    }
  }
);
popupCardDelete.setEventListener();


// open popup avatar
constants.buttonAvatar.addEventListener('click', () => {
  validatorFormAvatar.resetValidation();
  popupAvatar.open();
})


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


// handle card click
const handleCardClick = (text, image) => {
  popupFullImg.open(text, image);
};

// handle card delete
const handleCardDelete = (cardId, card) => {
  popupCardDelete.open(cardId, card);
}

// handle update likes
const handleUpdateLikes = (card, buttonLike) => {
  if(!buttonLike.classList.contains('card__like_active')) {
    api.addLike(card.cardId)
      .then(res => card.updateLikes(res.likes.length))
      .catch(err => console.error(`Ошибка: ${err}`))

      return
  } else {
    api.deleteLike(card.cardId)
      .then(res => card.updateLikes(res.likes.length))
      .catch(err => console.error(`Ошибка: ${err}`))

      return
  }
};


// creat Card
const creatCard = (cardInfo, userId) => {
  const card = new Card(
    cardInfo,
    userId,
    '.card-template',
    handleCardClick,
    handleCardDelete,
    handleUpdateLikes
  );

  const cardElement = card.renderCard();
  return cardElement;
};


// card Add
const cardAdd = new Section ({ renderer: (item) => {
      const card = creatCard(item, userId);
      cardAdd.addItem(card);
    }
  },
  constants.cardItems
);


// promise get user info
const getUserInfo = new Promise((resolve, reject) => {
  resolve(api.getUserInfo())
  reject('Ошибка')
})
  .catch(err => console.error(err))

// promise get cards
const getCards = new Promise((resolve, reject) => {
  resolve(api.getCards())
  reject('Ошибка')
})
  .catch(err => console.error(err))


// static promise: user information first, then maps
Promise.all([getUserInfo, getCards])
  .then(res => {
    const setUserInfo = res[0];
    const getCard = res[1];

    userInfo.setUserInfo({
      name: setUserInfo.name,
      about: setUserInfo.about
    });
    userInfo.setUserAvatar(setUserInfo.avatar);

    userId = setUserInfo._id;

    return getCard;
  })
  .then(res => res
    .reverse()
    .forEach(item => cardAdd.renderItems([item]))
  )
  .catch(err => console.error(`Ошибка: ${err}`))
