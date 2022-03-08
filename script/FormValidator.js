// class Form Validator
class FormValidator {
  constructor(formElement, config) {
    this._formElement = formElement;
    this._inputSelector = config.inputSelector;
    this._inputInvalidClass = config.inputInvalidClass;
    this._submitButtonSelector = config.submitButtonSelector;
    this._submitButtonInactiveClass = config.submitButtonInactiveClass;
  };

  // get form elements
  _getFormElement() {
    return document.querySelector(this._formElement);
  };

  // get input list
  _getFormInputList() {
    return Array.from(this._form.querySelectorAll(this._inputSelector));
  };

  // get button submit
  _getFormButtonSubmit() {
    return this._form.querySelector(this._submitButtonSelector);
  };

  // show error
  _showError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(this._inputInvalidClass);
    errorElement.textContent = inputElement.validationMessage;
  };

  // hide error
  _hideError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(this._inputInvalidClass);
    errorElement.textContent = '';
  };

  // check input validity
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement)
    } else {
      this._hideError(inputElement);
    }
  };

  // has invalid input
  _hasInvalidInput() {
    return this._inputList.some(item => {
      return !item.validity.valid;
    });
  };

  // button submit inactive
  _buttonSubmitInactive() {
    this._buttonSubmit.classList.add(this._submitButtonInactiveClass);
    this._buttonSubmit.disabled = true;
  };

  // button submit active
  _buttonSubmitActive() {
    this._buttonSubmit.classList.remove(this._submitButtonInactiveClass);
    this._buttonSubmit.disabled = false;
  };

  // toggle submit
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonSubmitInactive();
    } else {
      this._buttonSubmitActive();
    }
  };

  // set event listener
  _setEventListener() {
    this._toggleButtonState();

    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  // start validation
  enableValidation() {
    this._form = this._getFormElement();
    this._inputList = this._getFormInputList();
    this._buttonSubmit = this._getFormButtonSubmit();

    this._setEventListener();
  };

  // reset validation
  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach(inputElement => {
      this._hideError(inputElement);
    });
  };
};


// export
export {FormValidator};
