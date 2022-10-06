const container = document.querySelector(".container");
const menuBtn = document.querySelector(".menuBtn");
const searchBtn = document.querySelector(".searchBtn");
const searchBar = document.querySelector(".search");
const main1 = document.querySelector(".main1");

//////////////////////////////////////
const showdropDown = function (e) {
  main1.classList.toggle("hidden");
};
menuBtn.addEventListener("click", showdropDown);
searchBtn.addEventListener("click", showdropDown);
container.addEventListener("click", function (e) {
  if (e.target !== menuBtn && e.target !== searchBtn) {
    if (!main1.classList.contains("hidden")) {
      main1.classList.toggle("hidden");
    }
    if (e.target === searchBar) {
      if (main1.classList.contains("hidden")) {
        main1.classList.toggle("hidden");
      }
    }
  }
});
