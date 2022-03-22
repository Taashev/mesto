// class user info
export default class UserInfo {
  constructor(name, about) {
    this._name = name;
    this._about = about;
  };

  // get user info
  getUserInfo() {
    return this._userInfo = {
      name: this._name.textContent,
      about: this._about.textContent
    };
  };

  // set user info
  setUserInfo({ name, about }) {
    this._name.textContent = name;
    this._about.textContent = about;
  };
};
