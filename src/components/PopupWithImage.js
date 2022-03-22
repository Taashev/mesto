// import
import Popup from './Popup.js';

// class popup fullscreen image
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  // open popup
  open(text, image) {
    super.open();
    this._popup.querySelector('.popup__full-img').src = image;
    this._popup.querySelector('.popup__full-img').alt = text;
    this._popup.querySelector('.popup__full-text').textContent = text;
  };

  // set event listener
  setEventListener() {
    super.setEventListener();
  };
}
