var arr = [
  {
    songName: "We Don't Talk Anymore",
    url: "./Songs/Charlie Puth.mp3",
    img: "https://i.ytimg.com/vi/tll1SLO8PCA/maxresdefault.jpg",
    time: "3:50",
  },
  {
    songName: "Perfect - Ed Sheeran",
    url: "./Songs/Perfect.mp3",
    img: "https://th.bing.com/th/id/R.b2d01a6a63f27fbd483e755aa724a9f3?rik=BBcmjACuPJVP8A&riu=http%3a%2f%2fs3.amazonaws.com%2fhalleonard-closerlook%2f00299507%2f00299507_Page-1z.jpg&ehk=B%2b%2bbQuwM2YjBu8jU9u66lsr%2fnc8qEL14Kn9a%2b9BhqJ0%3d&risl=&pid=ImgRaw&r=0",
    time: "4:39",
  },
  {
    songName: "Ghungroo",
    url: "./Songs/Ghungroo.mp3",
    img: "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2019/09/05/Ghungroo-Song-HD-stills-from-War-Movie-set-1-59.jpg?quality=80&zoom=1&ssl=1",
    time: "4:59",
  },
  {
    songName: "Perfect - One Direction",
    url: "./Songs/One Direction.mp3",
    img: "https://wallpaperaccess.com/full/382961.png",
    time: "3:48",
  },
];

var audio = new Audio();
var allsongs = document.querySelector("#all-songs");
var poster = document.querySelector("#left");
var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");

var selectedSong = 0;

function mainFunction() {
  var clutter = "";
  arr.forEach(function (elem, index) {
    clutter += `<div class="song-card" id=${index}>
            <div class="part1">
              <img
                src="${elem.img}"
                alt="Poster Image"
              />
              <h2>${elem.songName}</h2>
            </div>
            <h6>${elem.time}</h6>
          </div>`;
  });
  allsongs.innerHTML = clutter;
  audio.src = arr[selectedSong].url;
  poster.style.backgroundImage = `url(${arr[selectedSong].img})`;
}
mainFunction();

allsongs.addEventListener("click", function (dets) {
  selectedSong = dets.target.id;
  play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
  flag = 1;
  mainFunction();
  audio.play();
});

var flag = 0;
play.addEventListener("click", function () {
  if (flag == 0) {
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    mainFunction();
    audio.play();
    flag = 1;
  } else {
    play.innerHTML = `<i class="ri-play-mini-fill"></i>`;
    mainFunction();
    audio.pause();
    flag = 0;
  }
});

forward.addEventListener("click", function () {
  if (selectedSong < arr.length - 1) {
    selectedSong++;
    mainFunction();
    audio.play();
  } else {
    forward.style.opacity = 0.6;
  }
});

backward.addEventListener("click", function () {
  if (selectedSong > 0) {
    selectedSong--;
    mainFunction();
    audio.play();
  } else {
    backward.style.opacity = 0.6;
  }
});
