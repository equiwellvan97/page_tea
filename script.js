const headerBurger = document.querySelector(".btn_burger");
const menuClose = document.querySelector(".btn_close");
const menuList = document.querySelector(".flex_box_link");
const menuShadow = document.querySelector(".menu_shadow");

headerBurger.addEventListener("click", () => {
  menuList.classList.toggle("flex_box_link--open");
  menuShadow.classList.toggle("menu_shadow--open");
});

menuClose.addEventListener("click", () => {
  menuList.classList.remove("flex_box_link--open");
  menuShadow.classList.remove("menu_shadow--open");
});
