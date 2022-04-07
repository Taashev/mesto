// class user info
export default class UserInfo {
  constructor(name, about, avatar) {
    this._name = name;
    this._about = about;
    this._avatar = avatar;
  };

  // get user info
  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent,
    };
  };

  // set user info
  setUserInfo({ name, about}) {
    this._name.textContent = name;
    this._about.textContent = about;
  };

  setUserAvatar(avatar) {
    this._avatar.src = avatar;
  }
};
