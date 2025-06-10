let btn = document.querySelector("button");
let grow = document.querySelector(".percent");
let growth = document.querySelector(".growth");

btn.addEventListener("click", () => {
  let p = 0;
  let n = Math.floor(Math.random() * 500) + 50;
  let run = setInterval(() => {
    p++;
    grow.textContent = `${p}%`;
    growth.style.width = `${p}%`;
  }, n);

  setTimeout(() => {
    clearInterval(run);
    btn.textContent = "Downloaded";
    btn.style.opacity = 0.5;
  }, n * 100);
});
