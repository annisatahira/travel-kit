class ListItem extends HTMLElement {
  set item(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="col s12 m3 l3">
        <div class="materialboxed card">
          <div class="card-content">
            <h1>${this._data.title}</h1>
            <ul>
              <li>
                ${this._data.list1}
              </li>
              <li>
                ${this._data.list2}
              </li>
              <li>
                ${this._data.list3}
              </li>
              <li>
               ${this._data.list4}
              </li>
              <li>
                ${this._data.list5}
              </li>
              <li>
               ${this._data.list6}
              </li>
              <li>
               ${this._data.list7}
              </li>
            </ul>
          </div>
        </div>
      </div>`;
  }
}

customElements.define("list-item", ListItem);
