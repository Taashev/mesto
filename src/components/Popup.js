export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._popupButtonClose = this._popup.querySelector('.popup__close');
    this._handleEscClose = this._handleEscClose.bind(this);
  };

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    };
  };

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keyup', this._handleEscClose);
  };

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._handleEscClose);
  };

  setEventListener() {
    this._popup.addEventListener('mousedown', (event) => {
      if (event.srcElement.classList.contains('popup')) {
        this.close();
      }
    });

    this._popupButtonClose.addEventListener('click', this.close.bind(this));
  };
};
