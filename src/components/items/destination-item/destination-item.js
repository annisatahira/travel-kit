class DestinationItem extends HTMLElement {
  set item(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="col s12 m6 l6">
          <div id="place-item">
            <h2>${this._data.name}</h2>
            <img src="${this._data.image}" />
          </div>
    </div>`;
  }
}

customElements.define("destination-item", DestinationItem);
