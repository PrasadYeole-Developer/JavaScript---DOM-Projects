let content = document.querySelector(".content");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);

  content.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
});
