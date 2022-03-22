// import
import Popup from './Popup.js';

// class popup fullscreen image
export default class PopupWithImage extends Popup {
  constructor(popupSelector, text, image) {
    super(popupSelector);
    this._image = image;
    this._text = text;
  }

  // open popup
  open() {
    super.open();
    this._popup.querySelector('.popup__full-img').src = this._image;
    this._popup.querySelector('.popup__full-img').alt = this._text;
    this._popup.querySelector('.popup__full-text').textContent = this._text;
  };

  // set event listener
  setEventListener() {
    super.setEventListener();
  };
}
