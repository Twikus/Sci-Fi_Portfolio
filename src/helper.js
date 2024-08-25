import { useSoundStore } from '@/stores/sound';
import clic from '@/assets/audio/clic.mp3';

export function playClick() {
    const soundStore = useSoundStore();

    if (soundStore.soundEffects) {
        const audio = new Audio(clic);
        audio.play();
    } else {
        return;
    }
}