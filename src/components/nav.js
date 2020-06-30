class Nav extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="transparent" role="navigation">
    <div class="nav-wrapper container">
      <a href="#home.html" class="brand-logo" id="logo-container"
        ><img src="./src/images/logo.png"
      /></a>
      <a href="#" class="sidenav-trigger" data-target="nav-mobile">☰</a>

      <ul class="topnav right hide-on-med-and-down"></ul>
      <ul class="sidenav" id="nav-mobile"></ul>
    </div>
  </nav>`;
  }
}

customElements.define("app-nav", Nav);
