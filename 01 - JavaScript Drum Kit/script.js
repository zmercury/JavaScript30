window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; // stops function from running

  audio.currentTime = 0; //rewinds to start
  audio.play();

  key.classList.add('playing');
});

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;

  this.classList.remove('playing');
}


const key = document.querySelectorAll('.key');
key.forEach(key => key.addEventListener("transitionend", removeTransition));
