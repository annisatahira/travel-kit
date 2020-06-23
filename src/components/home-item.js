class HomeItem extends HTMLElement {
  set item(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="col s12 m4">
        <div class="card cyan darken-2">
          <div class="card-content white-text">
            <span class="card-title">${this._data.title}</span>
            <p>
              ${this._data.description}
            </p>
        </div>
      </div>
    </div>`;
  }
}

customElements.define("home-item", HomeItem);
