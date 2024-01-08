"use strick";

// filter

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".catalog__item_btn");
  let galleries = document.querySelectorAll(".catalog__logo_list");

  buttons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      buttons.forEach(function (btn) {
        btn.classList.remove("active1");
      });

      button.classList.add("active1");

      galleries.forEach(function (gallery) {
        gallery.classList.remove("active");
      });

      galleries[index].classList.add("active");
    });
  });

  buttons[0].classList.add("active1");
  galleries[0].classList.add("active");
});
