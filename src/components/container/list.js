class List {
  constructor(selector, item, data) {
    // const selectorElement = document.querySelector(selector);

    this.selector = selector;
    this.listElement = item;
    this.data = data;
    console.log(this.listElement);
  }

  render() {
    this.data.forEach(item => {
      const dataELement = document.createElement(this.listElement);
      dataELement.item = item;
      this.selector.appendChild(dataELement);
    });
  }
}

export default List;
