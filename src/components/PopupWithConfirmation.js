import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this.handleFormSubmit = handleFormSubmit;
  };

  // open
  open(cardId, card) {
    super.open();
    this._cardId = cardId;
    this.card = card;
  }

  // set event listener
  setEventListener() {
    super.setEventListener();

    this._popup.addEventListener('submit', (event) => {
      event.preventDefault();

      this.handleFormSubmit(this.card, this._cardId, this._renderLoading);
    });
  };
};
