// import
import Popup from './Popup.js';

// class popup with form
export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._handleFormSubmit = handleFormSubmit;
  };

  // input value
  _getInputValues() {
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._inputValues = {};

    this._inputList.forEach(input => {
      this._inputValues[input.name] = input.value;
    });

    return this._inputValues;
  };

  // open popup
  open() {
    super.open();
  };

  // close popup
  close() {
    super.close();
    this._popupForm.reset();
  };

  // set event listener
  setEventListener() {
    super.setEventListener();

    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._handleFormSubmit(this._getInputValues(), this._renderLoading);
    });
  };
};
