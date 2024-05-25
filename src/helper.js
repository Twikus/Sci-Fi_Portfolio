import { useSoundStore } from '@/stores/sound';

export function playClick() {
    const soundStore = useSoundStore();

    if (soundStore.soundEffects) {
        const audio = new Audio('/src/assets/audio/clic.mp3');
        audio.play();
    } else {
        return;
    }
}