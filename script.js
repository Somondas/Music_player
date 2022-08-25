const play = document.getElementById('play');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const image = document.getElementById("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

//?? A array of an objects
const songs =
    [{
        src: "music (1)",
        title: "VIKRAM",
        artist: " Kamal Haasan"
    },
    {
        src: "music (2)",
        title: "Once Upon A Time",
        artist: " Anirudh Ravichander"
    },
    {
        src: "music (3)",
        title: "Rolex Theme ",
        artist: "ANIRUDH RAVICHANDER"
    }]


const music = document.querySelector("audio")
// TODO: Now I have play the music whenever the user click on the play button

let isPlaying = false

//>> For playing music this function will be called
const playMusic = () => {
    //** This will play the music
    isPlaying = true
    music.play()
    //**  This will replace the play icon with pause icon
    play.classList.replace("fa-play-circle", "fa-pause-circle")
    //** This will add the rotate class to the image which have the animation
    image.classList.remove("stop-rotate")
    image.classList.add("rotate")
}
//>> To pause the music this function will be called

const pauseMusic = () => {
    //** This will play the music
    isPlaying = false
    music.pause()
    //** This will replace the play icon with pause icon
    play.classList.replace("fa-pause-circle", "fa-play-circle")
    //** This will add the rotate class to the image which have the animation
    image.classList.add("stop-rotate")
}
play.addEventListener("click", () => {
    isPlaying ? pauseMusic() : playMusic()
})

// TODO: Now I have the change the track and artist name and songs name and image.

const loadSong = (songs) => {
    title.textContent = songs.title
    artist.textContent = songs.artist
    image.src = `images/${songs.src}.jpg`
    music.src = `music/${songs.src}.mp3`

}
//TODO: Now I have to increase the index number whenever the user clicks on the next button.

let indexCount = 0
const nextSong = () => {
    indexCount = (indexCount + 1) % songs.length
    loadSong(songs[indexCount])
    playMusic()
}
const prevSong = () => {
    indexCount = (indexCount - 1 + songs.length) % songs.length
    loadSong(songs[indexCount])
    playMusic()
}
next.addEventListener('click', nextSong)
prev.addEventListener('click', prevSong)