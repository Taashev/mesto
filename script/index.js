const cardTemplate = document.querySelector('.card-template').content;
const cardItems = document.querySelector('.card__items');

const buttonEdit = document.querySelector('.profile__edit-btn');
const buttonAdd = document.querySelector('.profile__add-btn');
const userName = document.querySelector('.profile__user-name');
const userAbout = document.querySelector('.profile__user-about');

const popup = document.querySelector('.popup');
const popupButtonClose = document.querySelector('.popup__close');
const popupCloseProfile = document.querySelector('.popup__close_type_profile');
const popupClosePhoto = document.querySelector('.popup__close_type_photo');
const popupCloseFullscreen = document.querySelector('.popup__close_type_fullscreen');

const popupProfile = document.querySelector('.popup_type_profile');
const popupFormProfile = document.querySelector('.popup__form_type_profile');
const popupInputName = document.querySelector('.popup__input_type_user-name');
const popupInputAbout = document.querySelector('.popup__input_type_about-me');

const popupPhoto = document.querySelector('.popup_type_photo');
const popupFormPhoto = document.querySelector('.popup__form_type_photo');
const popupInputCardName = document.querySelector('.popup__input_type_card-name');
const popupInputCardLink = document.querySelector('.popup__input_type_card-link');

const popupFullscreen = document.querySelector('.popup_type_fullscreen');
const popupFullImg = document.querySelector('.popup__full-img');
const popupFullText = document.querySelector('.popup__full-text');

const initialCards = [
  {
    name: 'Звездное небо',
    link: 'https://images.unsplash.com/photo-1643712662909-29fe8f02b613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Взлетаем',
    link: 'https://images.unsplash.com/photo-1637477144793-cd3476659b0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80'
  },
  {
    name: 'Северное сияние',
    link: 'https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Закат',
    link: 'https://images.unsplash.com/photo-1584377160571-1ea5df91fc75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80'
  },
  {
    name: 'Лондонский мост',
    link: 'https://images.unsplash.com/photo-1643574914412-409598704135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Горячие источники',
    link: 'https://images.unsplash.com/photo-1486108275492-35260a5d3318?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
  }
];


// popup open
const popupOpen = popup =>  {
  popup.classList.add('popup_opened');
};

buttonEdit.addEventListener('click', () => {
  popupInputName.value = userName.textContent;
  popupInputAbout.value = userAbout.textContent;

  popupOpen(popupProfile, validationConfig);
  resetValidation(popupProfile, validationConfig);
});

buttonAdd.addEventListener('click', () => {
  popupOpen(popupPhoto, validationConfig);
  resetValidation(popupPhoto, validationConfig);
});


// popup close
const popupClose = popup => {
  popup.classList.remove('popup_opened');
};

popupCloseProfile.addEventListener('click', () => {
    popupClose(popupProfile);
});

popupClosePhoto.addEventListener('click', () => {
    popupClose(popupPhoto);
    popupInputCardName.value = '';
    popupInputCardLink.value = '';
});

popupCloseFullscreen.addEventListener('click', () => {
    popupClose(popupFullscreen);
});


// like
const like = event => {
  event.target.classList.toggle('card__like_active');
};

// delete
const trash = event => {
  event.target.closest('.card__item').remove();
};


// handler form profile
const formSubmitHandlerProfile = evt => {
  evt.preventDefault();
  userName.textContent = popupInputName.value;
  userAbout.textContent = popupInputAbout.value;

  popupClose(popupProfile);
};
popupFormProfile.addEventListener('submit', formSubmitHandlerProfile);

//handler form photo
const formSubmitHandlerAddCard = evt => {
  evt.preventDefault();
  const card = cardRender(popupInputCardName.value, popupInputCardLink.value);
  addCard(card);

  popupClose(popupPhoto);
  popupFormPhoto.reset();
};
popupFormPhoto.addEventListener('submit', formSubmitHandlerAddCard);


// card render
const cardRender = (name, link) => {
  const cardItem = cardTemplate.querySelector('.card__item').cloneNode(true);
  const cardImg = cardItem.querySelector('.card__img');
  const cardText = cardItem.querySelector('.card__text');
  const cardLike = cardItem.querySelector('.card__like');
  const cardTrash = cardItem.querySelector('.card__trash');

  cardImg.src = link;
  cardImg.alt = name;
  cardText.textContent = name;
  cardLike.addEventListener('click', like);
  cardTrash.addEventListener('click', trash);
  cardImg.addEventListener('click', () => {
    popupFullImg.src = cardImg.src;
    popupFullImg.alt = cardImg.alt;
    popupFullText.textContent = cardText.textContent;

    popupOpen(popupFullscreen);
  })

  return cardItem;
};

// add card
const addCard = card => {
  cardItems.prepend(card);
};

initialCards.forEach( item => {
  const card = cardRender(item.name, item.link);

  addCard(card);
});
