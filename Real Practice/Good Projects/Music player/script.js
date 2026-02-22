const playSong = document.querySelector('#song')
const playPauseButton = document.querySelector('.ri-play-large-fill')

console.log(playSong,playPauseButton)

playPauseButton.addEventListener('click', function () {
    if (playSong.paused) {
        playSong.play()
        playPauseButton.classList.remove("ri-play-large-fill")
        playPauseButton.classList.add("ri-pause-large-line")
    } else {
        playSong.pause()
        playPauseButton.classList.remove("ri-pause-large-line")
         playPauseButton.classList.add("ri-play-large-fill")
    }
})