// class popup
export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._popupButtonSubmit = this._popup.querySelector('.popup__button')
    this._popupButtonClose = this._popup.querySelector('.popup__close');
    this._handleEscClose = this._handleEscClose.bind(this);
    this._renderLoading = this._renderLoading.bind(this);
  };

  // handle esc close
  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    };
  };

  // open popup
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keyup', this._handleEscClose);
  };

  // close popup
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._handleEscClose);
  };

  // button loading
  _renderLoading(toggle, textLoading = 'Сохранение...', textStatic = 'Сохранить') {
    if(toggle) {
      this._popupButtonSubmit.textContent = textLoading;
    } else {
      this._popupButtonSubmit.textContent = textStatic;
    }
  }

  // set event listener
  setEventListener() {
    // close popup overlay
    this._popup.addEventListener('mousedown', (event) => {
      if (event.srcElement.classList.contains('popup')) {
        this.close();
      }
    });

    // close popup button
    this._popupButtonClose.addEventListener('click', this.close.bind(this));
  };
};
