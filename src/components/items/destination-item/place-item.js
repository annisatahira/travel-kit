class PlaceItem extends HTMLElement {
  set item(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
    <a class="carousel-item">
        <div class="card">
         <div class="card-image">
             <img
                
                src="${this._data.image}"
             />
             <span class="card-title">${this._data.name}</span>
         </div>
        </div>
  </a>`;
  }
}

customElements.define("place-item", PlaceItem);
