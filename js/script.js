console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio("./song/Khaab.mp3");
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("progressBarId");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("song-items"));
let masterSong = document.getElementById("song-name-bottom");

let songs = [
  {
    songName: "Khaab - Akhil",
    filePath: "song/Khaab.mp3",
    coverPath: "./covers/Khaab.jpg",
  },
  {
    songName: "Kalla Sohna Nai - Akhil",
    filePath: "./song/Kalla Sohna Nai.mp3",
    coverPath: "./covers/Kalla Sohna Nai.jpg",
  },
  {
    songName: "Shadow - Singga",
    filePath: "./song/Shadow.mp3",
    coverPath: "./covers/Shadow.jpg",
  },
  {
    songName: "Zindagi Haseen - Pav Dharia",
    filePath: "./song/Zindagi-Haseen.mp3",
    coverPath: "./covers/zindagi haseen.jpg",
  },
  {
    songName: "Bad Guy - Billie Eilish",
    filePath: "./song/Bad guy.mp3",
    coverPath: "./covers/bad guy.jpg",
  },
  {
    songName: "Viah Di Khabar - KAKA",
    filePath: "./song/Viah Di Khabar.mp3",
    coverPath: "./covers/Viah-Di-Khabar.jpg",
  },
  {
    songName: "ABCDEFU - Gayle",
    filePath: "./song/abcdefu.mp3",
    coverPath: "./covers/abcdefu.jpg",
  },
  {
    songName: "Mohabbat - Kambi Rajpuria",
    filePath: "./song/Mohabbat.mp3",
    coverPath: "./covers/mohabbat.jpg",
  },
];
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.add("fa-pause-circle");
    masterPlay.classList.remove("fa-play-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
audioElement.addEventListener("timeupdate", () => {
  //   console.log("time update");
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100,
  );
  //   console.log(progress);
  progressBar.value = progress;
});
progressBar.addEventListener("change", () => {
  audioElement.currentTime = audioElement.duration * (progressBar.value / 100);
  progressBar.value = progress;
});

songItems.forEach((element, i) => {
  element.getElementsByClassName("song-img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("song-name")[0].innerHTML = songs[i].songName;
});

const makeAllPlay = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    },
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlay();
      songIndex = parseInt(e.target.id);
      console.log(songIndex);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `${songs[songIndex].filePath}`;
      console.log(masterSong.innerText);
      masterSong.innerText = `${songs[songIndex].songName}`;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  },
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `${songs[songIndex].filePath}`;
  masterSong.innerText = `${songs[songIndex].songName}`;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `${songs[songIndex].filePath}`;
  masterSong.innerText = `${songs[songIndex].songName}`;

  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

const p = () => {
  document.getElementById("gif").addEventListener("click", () => {
    document.getElementById("song-name-bottom").innerText = "Khaab - Akhil";
  });
};
