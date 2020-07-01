class KitIntroItem extends HTMLElement {
  set item(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="travel-kit-item">
        <div class="col s12 m4 l4">
            <h4>${this._data.title}</h4>
            <p>${this._data.description}</p>
            <img src="${this._data.image}" />
        </div>
    </div>`;
  }
}

customElements.define("kit-intro", KitIntroItem);
