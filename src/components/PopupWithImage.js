// import
import Popup from './Popup.js';

// class popup fullscreen image
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._images = this._popup.querySelector('.popup__full-img');
    this._text = this._popup.querySelector('.popup__full-text');
  }

  // open popup
  open(text, image) {
    super.open();
    this._images.src = image;
    this._images.alt = text;
    this._text.textContent = text;
  };
}
