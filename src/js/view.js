import "../components/container/home-item/intro-item.js";
import "../components/container/home-item/menu-item.js";
import { dataIntroHome, dataMenuHome } from "../data/data-app.js";
import List from "../components/container/list.js";

const main = () => {
  // Activate sidebar nav
  const elems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elems);
  loadNav();

  function loadNav() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status != 200) return;

        // Muat daftar tautan menu
        document.querySelectorAll(".topnav, .sidenav").forEach(function(elm) {
          elm.innerHTML = xhttp.responseText;
        });

        // Daftarkan event listener untuk setiap tautan menu
        document
          .querySelectorAll(".sidenav a, .topnav a")
          .forEach(function(elm) {
            elm.addEventListener("click", function(event) {
              // Tutup sidenav
              var sidenav = document.querySelector(".sidenav");
              M.Sidenav.getInstance(sidenav).close();

              // Muat konten halaman yang dipanggil
              page = event.target.getAttribute("href").substr(1);
              loadPage(page);
            });
          });
      }
    };
    xhttp.open("GET", "nav.html", true);
    xhttp.send();
  }

  // Load page content
  let page = window.location.hash.substr(1);
  if (page == "") page = "home";
  loadPage(page);

  function loadPage(page) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        const content = document.querySelector("#body-content");

        if (this.status == 200) {
          try {
            content.innerHTML = xhttp.responseText;
            if ((page = "home")) {
              const elementIntro = document.querySelector("#home-intro");
              const listIntro = new List(
                elementIntro,
                "intro-item",
                dataIntroHome
              );
              listIntro.render();

              const elementMenu = document.querySelector("#home-menu-item");
              const listMenu = new List(elementMenu, "menu-item", dataMenuHome);
              listMenu.render();
            }
          } catch (error) {}
        } else if (this.status == 404) {
          content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
        } else {
          content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
        }
      }
    };

    xhttp.open("GET", "src/components/" + page + ".html", true);
    xhttp.send();
  }
};

export default main();
