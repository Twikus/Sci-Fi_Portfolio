<script setup lang="ts">
import { playClick } from '@/helper'

const isClicked = ref(false) 
const soundEffects = ref(true)
const music = ref(true)
const click = ref(109)

let serverTime = ref(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
let localTime = ref(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))

setInterval(() => {
    serverTime.value = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    localTime.value = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}, 1000)

const addClick = () => {
    click.value += 1
    isClicked.value = true
}

const toggleSoundEffects = () => {
    soundEffects.value = !soundEffects.value
    playClick(soundEffects.value)
}

const toggleMusic = () => {
    music.value = !music.value
    playClick(soundEffects.value)
}

</script>

<template>
    <audio src="/src/assets/audio/ambient.mp3" autoplay loop v-if="music"/>
    <header>
        <div class="header-left">
            <div>
                <span class="number">22</span>
                <span class="text">LEVEL</span>
            </div>
            <div>
                <input v-if="!isClicked" type="button" value="+" @click="addClick" class="check-btn" />
                <input v-if="isClicked" type="button" value="✓" disabled class="check-btn" />
                <span class="number">{{ click }}</span>
                <span class="text">COINS AWARDED</span>
            </div>
        </div>
        <div class="header-right">
            <ul>
                <li>
                    <RouterLink class="link" to="/credits">CREDITS</RouterLink>
                </li>
                <li>
                    <p>SERVER TIME : <span>{{ serverTime }}</span></p>
                </li>
                <li>
                    <p>LOCAL TIME : <span>{{ localTime }}</span></p>
                </li>
            </ul>
        </div>
    </header>

    <div class="main-container">
        <div class="content-left">
            <div class="top">
                <div class="image-container">
                    <div class="top-left"></div>
                    <div class="top-right"></div>
                    <div class="bottom-right"></div>
                    <div class="bottom-left"></div>
                    <img src="/src/assets/img/profil.jpeg" alt="profile image">
                </div>
                <ul>
                    <li>
                        <p class="label">NAME</p>
                        <p class="text">AXEL DUQUELZAR</p>
                    </li>
                    <li>
                        <p class="label">OCCUPATION</p>
                        <p class="text">WEB DEVELOPER</p>
                    </li>
                    <li>
                        <p class="label">CURRENT CORPORATION</p>
                        <p class="text">SPLIIIT</p>
                    </li>
                    <li>
                        <p class="label">AVAILABILITY</p>
                        <div class="open-hire">
                            <p>OPEN FOR HIRE</p>
                            <img src="/src/assets/img/hire.svg" alt="hire icon">
                        </div>
                    </li>
                    <li>
                        <p class="label">SOCIAL</p>
                        <div class="open-connection">
                            <p>OPEN CONNECTION</p>
                            <img src="/src/assets/img/open.svg" alt="open in new icon">
                        </div>
                    </li>
                </ul>
            </div>
            <div class="bottom">
                <p class="label">MOTTO :</p>
                <p class="text">Est socia mortis homini vita ingloria</p>
            </div>
        </div>
        <div class="content-right">
            <div class="top">
                <div class="active-quest-container">
                    <div class="header">
                        <span class="label">ACTIVE QUEST</span>
                        <p class="text-grey">MOTOVS - THE MOTORCYCLE COMPARATOR</p>
                    </div>
                    <div class="body">
                        <div>
                            <p class="label">QUEST NAME</p>
                            <p class="text">MOTOVS</p>
                        </div>
                        <div>
                            <p class="label">GOAL</p>
                            <p class="text-grey">BUILD THIS WEBSITE. CREATE A WEBSITE TO COMPARE DIFFERENT MOTORCYCLE STATS</p>
                        </div>
                        <div>
                            <p class="label">REWARDS</p>
                            <div class="rewards-container">
                                <div>
                                    <img src="/src/assets/img/rewards/5.png" alt="reward +5">
                                    <span class="text-grey">+5</span>
                                </div>
                                <div>
                                    <img src="/src/assets/img/rewards/25.png" alt="reward +25">
                                    <span class="text-grey">+25</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div :class="{ 'disabled': !soundEffects }">
                    <p class="text">SOUND EFFECTS</p>
                    <input v-if="soundEffects" type="button" value="✓" @click="toggleSoundEffects" class="check-btn" />
                    <input v-else type="button" value="x" @click="toggleSoundEffects" class="check-btn" />
                </div>
                <div :class="{ 'disabled': !music }">
                    <p class="text">MUSIC</p>
                    <input v-if="music" type="button" value="✓" @click="toggleMusic" class="check-btn" />
                    <input v-else type="button" value="x" @click="toggleMusic" class="check-btn" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .header-left, .header-right {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 70px;
    }

    .header-left {
        font-family: 'Big Shoulders Display', sans-serif;
        font-weight: 700;

        div {
            display: flex;
            flex-direction: row;
            align-items: end;
            margin-right: 40px;

            span {
                font-size: 1.5rem;
                font-weight: bold;

                &.number {
                    font-size: 26px;
                    line-height: normal;
                    color: var(--green-primary);
                    margin-right: 5px;
                }

                &.text {
                    font-size: 16px;
                    color: var(--grey-primary);
                    letter-spacing: 1px;
                    font-weight: 600;
                }
            }
        }
    }

    .header-right {
        z-index: 100 !important;

        ul {
            display: flex;
            flex-direction: row;
            align-items: center;
            list-style: none;
            margin: 0;
            padding: 0;

            li {
                margin-right: 20px;
                font-size: 14px;
                font-weight: 600;

                p {
                    margin: 0;
                    padding: 0;
                    color: var(--grey-primary);
                    letter-spacing: 2px;
                }

                span {
                    color: white;
                }

                .link {
                    color: white;
                    text-decoration: none;
                    cursor: pointer;
                }
            }
        }
    }
}

.check-btn {
    width: 33px;
    height: 33px;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: transparent;
    border: 1px solid #ffffff5a;
    color: var(--red-primary);
    cursor: pointer;
    margin-right: 10px;
}

.main-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .content-right, .content-left {
        width: 190px;
        height: 83vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .label {
        font-size: 14px;
    }

    .text {
        font-size: 18px;
        font-family: 'Big Shoulders Display', sans-serif;
        font-weight: 700;
        color: var(--red-primary);
        letter-spacing: 1px;
    }

    .content-left {
        .top {
            .image-container {
                height: 190px;
                border: 1px solid var(--grey-lower);
                background-color: transparent;
                position: relative;
                margin: 20px 3px;

                img {
                    width: 100%;
                    height: 100%;
                }

                .top-left, .top-right, .bottom-right, .bottom-left {
                    position: absolute;
                    width: 10px;
                    height: 10px;
                }

                .top-left {
                    top: -3px;
                    left: -3px;
                    border-top: 3px solid var(--red-primary);
                    border-left: 3px solid var(--red-primary);
                }

                .top-right {
                    top: -3px;
                    right: -3px;
                    border-top: 3px solid var(--red-primary);
                    border-right: 3px solid var(--red-primary);
                }

                .bottom-right {
                    bottom: -3px;
                    right: -3px;
                    border-bottom: 3px solid var(--red-primary);
                    border-right: 3px solid var(--red-primary);
                }

                .bottom-left {
                    bottom: -3px;
                    left: -3px;
                    border-bottom: 3px solid var(--red-primary);
                    border-left: 3px solid var(--red-primary);
                }
            }

            ul {
                list-style: none;
                padding: 0;

                li {
                    margin-bottom: 20px;

                    p {
                        letter-spacing: 1px;
                    }
                }
            }

            .open-hire {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                background-color: var(--red-primary);
                padding-left: 5px;
                
                p {                    
                    color: black;
                    font-size: 18px;
                    font-family: 'Big Shoulders Display', sans-serif;
                    font-weight: 700;
                    letter-spacing: 1px;
                }

                img {
                    width: 30px;
                    height: 30px;
                }
            }

            .open-connection {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                border: 2px solid var(--red-primary);
                padding-left: 5px;
                cursor: pointer;
                
                p {                    
                    color: var(--red-primary);
                    font-size: 18px;
                    font-family: 'Big Shoulders Display', sans-serif;
                    font-weight: 700;
                    letter-spacing: 1px;
                }

                .icon {
                    width: 30px;
                    height: 30px;
                }
            }
        }

        .bottom {
            .label {
                font-size: 18px;
                color: var(--red-primary);
                letter-spacing: 1px;
            }

            .text {
                font-size: 16px;
                font-family: 'Big Shoulders Display', sans-serif;
                color: var(--grey-primary);
                letter-spacing: 1px;
            }
        }
    }

    .content-right {
        .top {
            .active-quest-container {
                border-left: 2px solid var(--red-primary);

                .text-grey {
                    font-size: 14px;
                    color: var(--grey-primary);
                }

                .header {
                    margin-bottom: 10px;

                    .label {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                        width: 100%;
                        background-color: var(--red-primary-dark);
                        padding-left: 8px;
                        font-size: 18px;
                        font-family: 'Big Shoulders Display', sans-serif;
                        font-weight: 700;
                        letter-spacing: 1px;
                    }

                    .text-grey {
                        background-color: var(--red-primary-opacity);
                        padding: 2px 8px;
                    }
                }

                .body {
                    padding-left: 8px;

                    & > div {
                        margin-bottom: 20px;
                    }
                    .rewards-container {
                        display: flex;
                        flex-direction: row;
                        align-items: center;

                        div {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            
                            &:last-child {
                                margin-left: 8px;
                            }
                        }
                    }
                }
            }
        }

        .bottom {
            div {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                width: 190px;
                
                &:last-child {
                    margin-top: 5px;
                }

                &.disabled {
                    opacity: 0.5;
                }

                p {
                    font-size: 18px;
                    font-family: 'Big Shoulders Display', sans-serif;
                    font-weight: 700;
                    color: var(--red-primary);
                    letter-spacing: 1px;
                }
            }
        }
    }
}

</style>