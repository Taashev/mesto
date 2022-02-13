const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  submitButtonInactiveSelector: 'popup__button_type_inactive',
  inputInvalidSelector: 'popup__input_type_invalid',
  inputList: formElement => {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector))
    return inputList;
  },
  submitButton: formElement => {
    const submitButton = formElement.querySelector(validationConfig.submitButtonSelector);
    return submitButton;
  }
};


const showError = (formElement, inputElement, errorMessage, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(validationConfig.inputInvalidSelector);
  errorElement.textContent = errorMessage;
};

const hideError = (formElement, inputElement, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(validationConfig.inputInvalidSelector);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, validationConfig) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage, validationConfig);
  } else {
    hideError(formElement, inputElement, validationConfig);
  };
};


const hasInvalidInput = inputList => {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  });
};

const buttonSubmitInactive = (buttonElement, validationConfig) => {
  buttonElement.classList.add(validationConfig.submitButtonInactiveSelector);
  buttonElement.disabled = true;
};

const buttonSubmitActive = buttonElement => {
  buttonElement.classList.remove(validationConfig.submitButtonInactiveSelector);
  buttonElement.disabled = false;
};

const toggleButtonState = (inputList, buttonElement, validationConfig) => {
  if (hasInvalidInput(inputList)) {
    buttonSubmitInactive(buttonElement, validationConfig);
  } else {
    buttonSubmitActive(buttonElement, validationConfig);
  };
};


const resetValidation = (formElement, validationConfig) => {
  const inputList = validationConfig.inputList(formElement);
  const buttonElement = validationConfig.submitButton(formElement);

  toggleButtonState(inputList, buttonElement, validationConfig);
  inputList.forEach(inputElement => {
    hideError(formElement, inputElement, validationConfig);
  });
};


const setEventListener = (formElement, validationConfig) => {
  const inputList = validationConfig.inputList(formElement);
  const buttonElement = validationConfig.submitButton(formElement);

  toggleButtonState(inputList, buttonElement, validationConfig);
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, validationConfig);
      toggleButtonState(inputList, buttonElement, validationConfig);
    });
  });
};


const enableValidation = (validationConfig) => {
  const forms = Array.from(document.querySelectorAll(validationConfig.formSelector));

  forms.forEach(formElement => {
    setEventListener(formElement, validationConfig);
  });
};

enableValidation(validationConfig);
