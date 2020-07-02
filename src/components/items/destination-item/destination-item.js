class DestinationItem extends HTMLElement {
  set item(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="col s12 m6 l6">
          <div id="place-item">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="${this._data.image}">
              </div>
          
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">${this._data.nation}<i class="material-icons right">close</i></span>
                <p>${this._data.description}</p>
              </div>
            </div>
            <h2>${this._data.city}</h2>
          </div>
    </div>`;
  }
}

customElements.define("destination-item", DestinationItem);
