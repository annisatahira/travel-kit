class MenuItem extends HTMLElement {
  set item(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="col s12 m4 l4">
        <div class="card">
            <div class="card-content white-text center">
                <h1>${this._data.title}</h1>
            </div>
        </div>
    </div>`;
  }
}

customElements.define("menu-item", MenuItem);
