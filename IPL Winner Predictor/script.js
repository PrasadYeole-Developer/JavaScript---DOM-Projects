let h1 = document.querySelector(".content h1");
let h3 = document.querySelector(".content h3");
let btn = document.querySelector("button");

let arr = [
  {
    team: "CSK",
    primary: "yellow",
    secondary: "darkblue",
  },
  {
    team: "MI",
    primary: "blue",
    secondary: "gold",
  },
  {
    team: "PBKS",
    primary: "red",
    secondary: "gold",
  },
  {
    team: "GT",
    primary: "darkblue",
    secondary: "gold",
  },
  {
    team: "LSG",
    primary: "teal",
    secondary: "lightseagreen",
  },
  {
    team: "DC",
    primary: "darkblue",
    secondary: "red",
  },
  {
    team: "RCB",
    primary: "darkred",
    secondary: "gold",
  },
  {
    team: "SRH",
    primary: "orange",
    secondary: "yellow",
  },
  {
    team: "KKR",
    primary: "purple",
    secondary: "gold",
  },
  {
    team: "RR",
    primary: "violet",
    secondary: "purple",
  },
];

btn.addEventListener("click", () => {
  let n = Math.floor(Math.random() * arr.length);
  h1.textContent = "Winner of the IPL 2025 :";
  h3.textContent = `${arr[n].team}`;
  h3.style.backgroundColor = `${arr[n].primary}`;
  h3.style.color = `${arr[n].secondary}`;
});
