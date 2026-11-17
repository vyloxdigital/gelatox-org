/* Gelatox — gelatox-org.vercel.app */
(function () {
  "use strict";

  /* Mobile navigation */
  var toggle = document.querySelector(".nav-open");
  var list = document.getElementById("nav-list");
  if (toggle && list) {
    toggle.addEventListener("click", function () {
      var open = list.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    list.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        list.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && list.classList.contains("open")) {
        list.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* Order dock: rises after the hero buttons leave,
     drops across the pricing matrix so it never masks it. */
  var dock = document.querySelector(".dock");
  if (dock && "IntersectionObserver" in window) {
    var scrolledPast = false;
    var overPrices = false;
    function sync() {
      dock.classList.toggle("up", scrolledPast && !overPrices);
    }
    var heroActs = document.getElementById("hero-acts");
    if (heroActs) {
      new IntersectionObserver(
        function (entries) {
          scrolledPast =
            !entries[0].isIntersecting && entries[0].boundingClientRect.top < 0;
          sync();
        },
        { threshold: 0 }
      ).observe(heroActs);
    }
    var prices = document.getElementById("matrix");
    if (prices) {
      new IntersectionObserver(
        function (entries) {
          overPrices = entries[0].isIntersecting;
          sync();
        },
        { threshold: 0 }
      ).observe(prices);
    }
  }
})();
