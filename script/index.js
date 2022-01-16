let body = document.querySelector('body');
let page = document.querySelector('.page');
let buttonEdit = page.querySelector('.profile__edit-btn')
let popupEditProfile = page.querySelector('.popup_type_profile');


// popupOpen
function popupOpen(btnOpen, open) {
  btnOpen.addEventListener('click', function() {
    body.classList.add('body_no-scroll');
    open.classList.toggle('popup_opened');
  });
};

popupOpen(buttonEdit, popupEditProfile);

// popupClose
function popupClose(popClose) {
  let popupClose = page.querySelector('.popup__close');

  popupClose.addEventListener('click', function () {
    body.classList.remove('body_no-scroll');
    popClose.classList.remove('popup_opened');
  });
};

popupClose(popupEditProfile);
