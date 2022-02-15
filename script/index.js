const cardTemplate = document.querySelector('.card-template').content;
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


// popup open
const openPopup = popupElement =>  {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keyup', closePopupEsc);
};

// open popup edit profile
buttonEdit.addEventListener('click', () => {
  popupInputName.value = userName.textContent;
  popupInputAbout.value = userAbout.textContent;

  openPopup(popupProfile);
  resetValidation(popupProfile, validationConfig);
});

// open popup add photo
buttonAdd.addEventListener('click', () => {
  openPopup(popupPhoto);
  resetValidation(popupPhoto, validationConfig);

  popupInputCardName.value = '';
  popupInputCardLink.value = '';
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


// set event listener popup close
const setEventListenerPopupClose = () => {
  const popupList = Array.from(popup);

  popupList.forEach(popupElement => {
    popupElement.addEventListener('click', event => {
      closePopupOverlay(event);
      closePopupButton(event);
    });
  });
};
setEventListenerPopupClose();


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
  evt.currentTarget.propaga
  userName.textContent = popupInputName.value;
  userAbout.textContent = popupInputAbout.value;

  closePopup(popupProfile);
};
popupFormProfile.addEventListener('submit', formSubmitHandlerProfile);

// handler form photo
const formSubmitHandlerAddCard = evt => {
  evt.preventDefault();
  const card = cardRender(popupInputCardName.value, popupInputCardLink.value);
  addCard(card);

  closePopup(popupPhoto);
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

    openPopup(popupFullscreen);
  })

  return cardItem;
};


// add card
const addCard = card => {
  cardItems.prepend(card);
};
