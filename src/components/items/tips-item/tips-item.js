class TipsItem extends HTMLElement {
  set item(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="tips-item col s12 m12 l12">
        <div class="col s12 m6 l6 img-center">
        <img src="${this._data.image}" />
        </div>
        <div class="col s12 m6 l6">
        <span>${this._data.number}</span>
        <h1>${this._data.title}</h1>
        <p>
            ${this._data.content}
        </p>
        </div>
    </div>`;
  }
}

customElements.define("tips-item", TipsItem);
