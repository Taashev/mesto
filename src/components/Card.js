export default class Card {
  constructor(cardInfo, userId, cardSelector, handleCardClick, handleCardDelete, handleUpdateLikes) {
    this._cardInfo = cardInfo;
    this.cardId = this._cardInfo._id;
    this._userId = userId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handUpdateleLikes = handleUpdateLikes;
  };

  // clone card
  _getTemplate() {
    const card = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card__item')
    .cloneNode(true);

    return card;
  };

  // active like
  _handleActiveLike() {
    this._elementLike.classList.add('card__like_active');
  };
  // inactive like
  _handleInactiveLike() {
    this._elementLike.classList.remove('card__like_active');
  };

  // delete card
  handleDelete() {
    this._element.remove();
    this._element = null;
  };

  // update likes
  updateLikes(counter) {
    if(this._elementLike.classList.contains('card__like_active')) {
      this._handleInactiveLike();
      this._elementCounter.textContent = counter;
    } else {
      this._handleActiveLike();
      this._elementCounter.textContent = counter;
    }
  };

  // get active likes
  _getActiveLikes() {
    this._cardInfo.likes.some(item => {
      if (item._id === this._userId) {
        this._handleActiveLike();
      }
    });
  };

  // hidden button trash
  _hiddenButtonTrash() {
    if(this._userId !== this._cardInfo.owner._id) {
      this._elementDelete.remove();
    }
  }

  // set event listener
  _setEventListener() {
    this._elementLike.addEventListener('click', () => {
      this._handUpdateleLikes(this, this._elementLike);
    });

    this._elementDelete.addEventListener('click', () => {
      this._handleCardDelete(this.cardId, this);
    });

    this._elementImg.addEventListener('click', () => {
      this._handleCardClick(this._cardInfo.name, this._cardInfo.link);
    });
  };

  // finished Card
  renderCard() {
    this._element = this._getTemplate();
    this._elementImg = this._element.querySelector('.card__img');
    this._elementText = this._element.querySelector('.card__text');
    this._elementLike = this._element.querySelector('.card__like');
    this._elementDelete = this._element.querySelector('.card__trash');
    this._elementCounter = this._element.querySelector('.card__counter');

    this._elementImg.src = this._cardInfo.link;
    this._elementImg.alt = this._cardInfo.name;
    this._elementText.textContent = this._cardInfo.name;
    this._elementCounter.textContent = this._cardInfo.likes.length;

    this._getActiveLikes();
    this._setEventListener();
    this._hiddenButtonTrash();

    return this._element;
  };
};
