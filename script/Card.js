// calss Card
class Card {
  constructor(text, image, cardSelector, handleCardClick) {
    this._text = text;
    this._image = image;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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

  // like card
  _handleLike() {
    this._elementLike.classList.toggle('card__like_active');
  };

  // delete card
  _handleDelete() {
    this._elementDelete.closest('.card__item').remove();
  };

  // set event listener
  _setEventListener() {
    this._elementLike.addEventListener('click', () => {
      this._handleLike();
    });

    this._elementDelete.addEventListener('click', () => {
      this._handleDelete();
    });

    this._elementImg.addEventListener('click', () => {
      this._handleCardClick(this._text, this._image);
    });

  };

  // finished Card
  renderCard() {
    this._element = this._getTemplate();
    this._elementImg = this._element.querySelector('.card__img');
    this._elementText = this._element.querySelector('.card__text');
    this._elementLike = this._element.querySelector('.card__like');
    this._elementDelete = this._element.querySelector('.card__trash');

    this._elementImg.src = this._image;
    this._elementImg.alt = this._text;
    this._elementText.textContent = this._text;
    this._setEventListener();

    return this._element;
  };
};


// export
export {Card};
