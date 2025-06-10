let btn = document.querySelector("button");
let h3 = document.querySelector("h3");

let check = 0;
btn.addEventListener("click", () => {
  if (check === 0) {
    h3.textContent = "Sending";
    h3.style.color = "lightseagreen";
    setTimeout(() => {
      h3.textContent = "Friends";
      h3.style.color = "green";
      btn.textContent = "Remove Friend";
      check = 1;
    }, 3000);
  } else {
    h3.textContent = "Stranger";
    h3.style.color = "darkred";
    btn.textContent = "Add Friend";
    check = 0;
  }
});
