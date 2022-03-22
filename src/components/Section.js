// class section
export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = containerSelector;
  };

  // render item
  renderItems(items) {
    items.forEach(item => {
      this._renderer(item);
    });
  };

  // add item DOM
  addItem(element) {
    this._container.prepend(element);
  };
};
