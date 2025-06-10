let btn = document.querySelector("button");
let body = document.querySelector("body");

btn.addEventListener("click", () => {
  let x = Math.floor(Math.random() * 90);
  let y = Math.floor(Math.random() * 90);
  let rot = Math.floor(Math.random() * 360);
  let img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://imgs.search.brave.com/53cXjC7wBcFEjelGRrSRd4sikJgR5KpyK02SiGSyS6U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mL2Rk/YTU1NmM0LWIzYjIt/NDU1OS05MzNhLWYw/ZDgzMGUyYzI1YS9k/aW0wZTRsLTA3OTVj/NTA2LWNhMDUtNGYx/Yi1hMzBkLWQ2N2Fk/ODNjYmMyNS5wbmc_/dG9rZW49ZXlKMGVY/QWlPaUpLVjFRaUxD/SmhiR2NpT2lKSVV6/STFOaUo5LmV5Snpk/V0lpT2lKMWNtNDZZ/WEJ3T2pkbE1HUXhP/RGc1T0RJeU5qUXpO/ek5oTldZd1pEUXhO/V1ZoTUdReU5tVXdJ/aXdpYVhOeklqb2lk/WEp1T21Gd2NEbzNa/VEJrTVRnNE9UZ3lN/alkwTXpjellUVm1N/R1EwTVRWbFlUQmtN/alpsTUNJc0ltOWlh/aUk2VzF0N0luQmhk/R2dpT2lKY0wyWmNM/MlJrWVRVMU5tTTBM/V0l6WWpJdE5EVTFP/UzA1TXpOaExXWXda/RGd6TUdVeVl6STFZ/Vnd2WkdsdE1HVTBi/QzB3TnprMVl6VXdO/aTFqWVRBMUxUUm1N/V0l0WVRNd1pDMWtO/amRoWkRnelkySmpN/alV1Y0c1bkluMWRY/U3dpWVhWa0lqcGJJ/blZ5YmpwelpYSjJh/V05sT21acGJHVXVa/RzkzYm14dllXUWlY/WDAucHUxN3pyM3Rj/UHpUQjZCN2NTWGNk/WmNJd283NnNLVElO/YmIxY0dqMnAtNA"
  );
  img.setAttribute("class", "image");
  img.style.position = "absolute";
  img.style.left = `${x}%`;
  img.style.top = `${y}%`;
  img.style.rotate = `${rot}deg`;

  body.appendChild(img);
});
