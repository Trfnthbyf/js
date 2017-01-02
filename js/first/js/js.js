console.log('Hello');

function playSound(e) {
    let audioKey = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let keyDiv = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audioKey) return null;
    audioKey.currentTime = 0;
    audioKey.play();
    keyDiv.classList.add("play");
}

function removeTransition() {
    this.classList.remove('play');
}

let keys = document.querySelectorAll('.key');

keys.forEach(x => x.addEventListener('transitionend', removeTransition));

document.addEventListener('keydown', playSound);
keys.forEach(a => a.addEventListener('click', playSound));
