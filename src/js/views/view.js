import "../../components/nav.js";
import "../../components/footer.js";
import "../../components/items/home-item/intro-item.js";
import "../../components/items/home-item/menu-item.js";
import "../../components/items/travel-item/kit-intro.js";
import "../../components/items/travel-item/list-item.js";
import "../../components/items/destination-item/place-item.js";
import {
  dataIntroHome,
  dataMenuHome,
  dataListTravel,
  dataListPlace
} from "../../data/data-app.js";
import List from "../../components/container/list.js";
import { introItems } from "../../data/travel-kit.js";

const main = () => {
  // Activate sidebar nav
  const elemsNav = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elemsNav);

  //Activate carousel

  const loadNav = () => {
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
              const sidenav = document.querySelector(".sidenav");
              M.Sidenav.getInstance(sidenav).close();

              // Muat konten halaman yang dipanggil
              page = event.target.getAttribute("href").substr(1);
              loadPage(page);
            });
          });
      }
    };
    xhttp.open("GET", "src/components/nav-menu.html", true);
    xhttp.send();
  };

  loadNav();

  const loadPlaces = () => {};

  const loadPage = page => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        const content = document.querySelector("#body-content");

        if (this.status == 200) {
          content.innerHTML = xhttp.responseText;
          if (page == "home") {
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
          } else if (page == "travel-kit") {
            const elmIntroKit = document.querySelector("#travel-kit-intro");
            const introKitList = new List(elmIntroKit, "kit-intro", introItems);
            introKitList.render();

            const elementTravel = document.querySelector("#travel-list");
            const listTravel = new List(
              elementTravel,
              "list-item",
              dataListTravel
            );
            listTravel.render();

            var elemss = document.querySelectorAll(".materialboxed");
            var optionss = {
              inDuration: 200
            };
            M.Materialbox.init(elemss, optionss);
          } else if (page == "destination") {
            // const displayPlace = async () => {
            //   try {
            //     await displayListPlace();
            //     carousel();
            //   } catch (error) {}
            // };
            // const displayListPlace = () => {
            //   const elementPlace = document.querySelector("#place-list");
            //   const listPlace = new List(
            //     elementPlace,
            //     "place-item",
            //     dataListPlace
            //   );
            //   listPlace.render();
            // };
            // const carousel = () => {
            //   //Carousel initialization
            //   const options = {
            //     numVisible: 3,
            //     duration: 200,
            //     indicators: true
            //   };
            //   const elems = document.querySelectorAll(".carousel");
            //   M.Carousel.init(elems, options);
            // };
            // displayPlace();
            var elemss = document.querySelectorAll(".materialboxed");
            var optionss = {
              inDuration: 200
            };
            M.Materialbox.init(elemss, optionss);
          }
        } else if (this.status == 404) {
          content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
        } else {
          content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
        }
      }
    };

    xhttp.open("GET", "src/components/pages/" + page + ".html", true);
    xhttp.send();
  };

  // Load page content
  let page = window.location.hash.substr(1);
  if (page == "") page = "home";
  loadPage(page);
};

export default main();
