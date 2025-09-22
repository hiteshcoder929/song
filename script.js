let pp = document.querySelector(".icons .fa-play");
let audioElement = new Audio("songs/song1.mp3");
let gif = document.querySelector(".gif");
let seekbar = document.querySelector(".seekbar")
let inputbar = document.querySelector(".timebar")



let playpause = () => {
    if (audioElement.paused || audioElement.currentTime < 0) {
        audioElement.play();
        pp.classList.remove("fa-play");
        pp.classList.add("fa-pause");
        seekbar.classList.remove("smallseek")
        gif.classList.remove("hideanimation")
    }
    else {
        audioElement.pause();
        pp.classList.remove("fa-pause");
        pp.classList.add("fa-play");
        seekbar.classList.add("smallseek")
        gif.classList.add("hideanimation")
    }
}
pp.addEventListener("click", playpause)

let song = [
    { songName: "hassen", flilePath: "songs/song2.mp3", coverpath: "images/song2.jpg" },
    { songName: "dhundhala", flilePath: "songs/song1.mp3", coverpath: "images/song1.jpg" },
    { songName: "pal pal", flilePath: "songs/song3.mp3", coverpath: "images/song3.jpg" },
    { songName: "finding her", flilePath: "songs/song4.mp3", coverpath: "images/song4.jpg" },
    { songName: "afsos", flilePath: "songs/song5.mp3", coverpath: "iamges/song5.jpg" },
]



audioElement.addEventListener("timeupdate", () => {
    let progress = (audioElement.currentTime / audioElement.duration * 100);
    inputbar.value = progress;
})

inputbar.addEventListener("change", () => {
    audioElement.currentTime = inputbar.value * audioElement.duration / 100;
})

allmakepause =()=>{
Array.from(document.querySelector("#control")).forEach((element) => {
        e.target.classList.remove("fa-play")
    })
}


Array.from(document.querySelector("#control")).forEach((element) => {
    element.addEventListener("click", (e) => {
        allmakepause ();
        e.target.classList.remove("fa-play")
        e.target.classList.add("fa-pause")
    })
})
