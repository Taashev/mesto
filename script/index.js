let page = document.querySelector('.page');
let editButton = page.querySelector('.profile__edit-btn')
let popupProfile = page.querySelector('.popup_type_profile');

function popupOpen(btn, open) {
  btn.addEventListener('click', function() {
    open.classList.add('popup_opened');
  });
};

popupOpen(editButton, popupProfile);

