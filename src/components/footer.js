class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Travel Kit</h5>
          <p class="grey-text text-lighten-4">
            Plan Your Journey and Discovering New Insight
          </p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Inspiration and Photo</h5>
          <ul>
            <li>Pinterest - Photo by Jim Tobeo on behance</li>
            <li>Pinterest - Photo by Nicepage</li>
            <li>Canva</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        © 2020 Submission PWA
        <a class="grey-text text-lighten-4 right" href="#!">Annisa Tahira</a>
      </div>
    </div>
  </footer>`;
  }
}

customElements.define("app-footer", Footer);
