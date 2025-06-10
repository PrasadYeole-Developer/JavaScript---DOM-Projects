let prevScroll = window.scrollY;
let nav = document.querySelector("nav");
let hide;

window.addEventListener("scroll", () => {
  let curScroll = window.scrollY;
  if (curScroll > prevScroll) {
    nav.style.top = "-100%";
    clearTimeout(hide);
  } else {
    nav.style.top = "0%";
    clearTimeout(hide);
    if (curScroll > 10) {
      hide = setTimeout(() => {
        nav.style.top = "-100%";
      }, 2000);
    }
  }
  prevScroll = curScroll;

});
