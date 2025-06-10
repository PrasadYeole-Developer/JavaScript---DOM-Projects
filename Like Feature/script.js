let img = document.querySelector("img");
let icon = document.querySelector("i");

img.addEventListener("dblclick", () => {
  icon.style.opacity = 1;
  setTimeout(() => {
    icon.style.opacity = 0;
  }, 2000);
});
