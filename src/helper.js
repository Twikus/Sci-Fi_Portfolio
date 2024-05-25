export function playClick(soundEffects) {
    if (soundEffects) {
        const audio = new Audio('/src/assets/audio/clic.mp3');
        audio.play();
    }
}