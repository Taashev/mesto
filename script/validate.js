// config selector
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputInvalidClass: 'popup__input_type_invalid',
  submitButtonSelector: '.popup__button',
  submitButtonInactiveClass: 'popup__button_type_inactive'
};

// show error
const showError = (formElement, inputElement, errorMessage, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(validationConfig.inputInvalidClass);
  errorElement.textContent = errorMessage;
};

// hide error
const hideError = (formElement, inputElement, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(validationConfig.inputInvalidClass);
  errorElement.textContent = '';
};

// check input validity
const checkInputValidity = (formElement, inputElement, validationConfig) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage, validationConfig);
  } else {
    hideError(formElement, inputElement, validationConfig);
  };
};


// has invalid input
const hasInvalidInput = inputList => {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  });
};

// button inactive
const buttonSubmitInactive = (buttonElement, validationConfig) => {
  buttonElement.classList.add(validationConfig.submitButtonInactiveClass);
  buttonElement.disabled = true;
};

// button active
const buttonSubmitActive = (buttonElement, validationConfig) => {
  buttonElement.classList.remove(validationConfig.submitButtonInactiveClass);
  buttonElement.disabled = false;
};

// check button validity
const toggleButtonState = (inputList, buttonElement, validationConfig) => {
  if (hasInvalidInput(inputList)) {
    buttonSubmitInactive(buttonElement, validationConfig);
  } else {
    buttonSubmitActive(buttonElement, validationConfig);
  };
};


// initial validation input end submit button
const setEventListener = (formElement, validationConfig) => {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, validationConfig);
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, validationConfig);
      toggleButtonState(inputList, buttonElement, validationConfig);
    });
  });
};


// start validation
const enableValidation = validationConfig => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));

  formList.forEach(formElement => {
    setEventListener(formElement, validationConfig);
  });
};
enableValidation(validationConfig);


// reset validation form
const resetValidation = (formElement, validationConfig) => {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, validationConfig);
  inputList.forEach(inputElement => {
    hideError(formElement, inputElement, validationConfig);
  });
};
