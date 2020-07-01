class SeasonItem extends HTMLElement {
  set item(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="col s12 m3 l3">
        <div class="card">
          <div class="card-image">
            <img class="activator" src="${this._data.image}" />
          </div>
          <div class="card-content">
            <span class="card-title">${this._data.season}</span>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">${this._data.season}<i class="material-icons right">close</i></span>
            <p>${this._data.description}</p>
            </div>
        </div>
      </div>`;
  }
}

customElements.define("season-item", SeasonItem);
