import { defineStore } from 'pinia'

interface Sound {
  soundEffects: boolean
  music: boolean
}

export const useSoundStore = defineStore('sound', {
  state: (): Sound => ({
    soundEffects: true,
    music: true,
  }),
  actions: {
    toggleSoundEffects() {
        this.soundEffects = !this.soundEffects
    },
    toggleMusic() {
        this.music = !this.music
    },
  },
})
