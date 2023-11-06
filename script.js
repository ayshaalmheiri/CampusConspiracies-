function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}

document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
document.getElementById("popup-1").classList.toggle("active");
	}
});

let isPlaying = false;
const playIcon = document.querySelector('.play-icon');
const pauseIcon = document.querySelector('.pause-icon');
const audio = document.getElementById('myAudio');

function togglePlay() {
		isPlaying = !isPlaying;

		if (isPlaying) {
				playIcon.style.display = 'none';
				pauseIcon.style.display = 'inline-block';
				audio.play(); // Starts playing the audio
		} else {
				pauseIcon.style.display = 'none';
				playIcon.style.display = 'inline-block';
				audio.pause(); // Pauses the audio
		}
}
