<script setup lang="ts">
import { defineEmits } from 'vue';
import { playClick } from '@/helper';
import { useSoundStore } from '@/stores/sound';

defineEmits(['update:active']);

const soundStore = useSoundStore();

const active = ref(1);
const navIsOpen = ref(false);

const showNav = () => {
    navIsOpen.value = true;
    playClick()
}

const closeNav = () => {
    navIsOpen.value = false;
    playClick()
}

const toggleSoundEffects = () => {
    soundStore.toggleSoundEffects()
    playClick()
}

const toggleMusic = () => {
    soundStore.toggleMusic()
    playClick()
}
</script>
<template>
    <div>
        <div class="navigation-modal" v-if="navIsOpen">
            <div class="modal-header">
                <h3>NAVIGATION</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-x" @click="closeNav">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </div>
            <div class="modal-content">
                <nav>
                    <div class="disabled-nav">
                        <h1>Sorry, navigation is disabled on phone...</h1>
                    </div>
                    <router-link to="/" class="link" active-class="active" @click="closeNav">
                        <span class="label">BEGINNING</span>
                        <p class="description">SUSCIPIT EST CONSEQUATUR NEMO VOLUPTATEM EST LABORE SAEPE.</p>
                    </router-link>
                    <router-link to="/logs" class="link" active-class="active" @click="closeNav">
                        <span class="label">LOGS</span>
                        <p class="description">HIC EST PROFESSIO MEA BACKGROUND (ET STUDIA MEA).</p>
                    </router-link>
                    <router-link to="/achievements" class="link" active-class="active" @click="closeNav">
                        <span class="label">ACHIEVEMENTS</span>
                        <p class="description">HIC EST IMAGO MEAE ARTES.</p>
                    </router-link>
                    <router-link to="/creations" class="link" active-class="active" @click="closeNav">
                        <span class="label">CREATIONS</span>
                        <p class="description">HIC EST INDEX INCEPTA PERSONALIA MEAE.</p>
                    </router-link>
                    <router-link to="/contact" class="link" active-class="active" @click="closeNav">
                        <span class="label">CONTACT</span>
                        <p class="description">PER HANC CONTACTUM FORMAM POTES PERVENIRE AD ME.</p>
                    </router-link>
                </nav>

                <div class="bottom">
                    <div class="effects" :class="{ 'disabled': !soundStore.soundEffects }">
                        <p class="text">SOUND EFFECTS</p>
                        <input v-if="soundStore.soundEffects" type="button" value="✓" @click="toggleSoundEffects"
                            class="check-btn" />
                        <input v-else type="button" value="x" @click="toggleSoundEffects" class="check-btn" />
                    </div>
                    <div class="effects" :class="{ 'disabled': !soundStore.music }">
                        <p class="text">MUSIC</p>
                        <input v-if="soundStore.music" type="button" value="✓" @click="toggleMusic" class="check-btn" />
                        <input v-else type="button" value="x" @click="toggleMusic" class="check-btn" />
                    </div>
                </div>
            </div>
        </div>
        <div class="navigation-button">
            <input type="button" value="NAVIGATION" :class="navIsOpen ? 'active' : ''" @click="showNav">
        </div>
        <div class="navigation-container">
            <nav>
                <router-link to="/" class="link" active-class="active" @click="playClick">
                    <span class="label">BEGINNING</span>
                    <p class="description">SUSCIPIT EST CONSEQUATUR NEMO VOLUPTATEM EST LABORE SAEPE.</p>
                </router-link>
                <router-link to="/logs" class="link" active-class="active" @click="playClick">
                    <span class="label">LOGS</span>
                    <p class="description">HIC EST PROFESSIO MEA BACKGROUND (ET STUDIA MEA).</p>
                </router-link>
                <router-link to="/achievements" class="link" active-class="active" @click="playClick">
                    <span class="label">ACHIEVEMENTS</span>
                    <p class="description">HIC EST IMAGO MEAE ARTES.</p>
                </router-link>
                <router-link to="/creations" class="link" active-class="active" @click="playClick">
                    <span class="label">CREATIONS</span>
                    <p class="description">HIC EST INDEX INCEPTA PERSONALIA MEAE.</p>
                </router-link>
                <router-link to="/contact" class="link" active-class="active" @click="playClick">
                    <span class="label">CONTACT</span>
                    <p class="description">PER HANC CONTACTUM FORMAM POTES PERVENIRE AD ME.</p>
                </router-link>
            </nav>
        </div>
    </div>
</template>

<style lang="scss">
.navigation-modal {
    display: none;
}

.navigation-button {
    display: none;
}

.navigation-container {
    width: 65%;
    height: 65px;
    margin: auto;
    position: relative;

    nav {
        height: 100%;
        position: absolute;
        top: -25px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: row;

        a {
            text-decoration: none;
            color: white;
        }

        .link {
            width: 150px;
            height: 100%;
            border-left: 2px solid var(--grey-primary);
            margin: 0 5px;

            &.active {
                transition: all 0.2s ease-in-out;
                border-left: 2px solid var(--red-primary);

                .label {
                    transition: all 0.2s ease-in-out;
                    background-color: var(--red-primary-dark);
                }
            }

            .label {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                background-color: var(--grey-dark);
                padding-left: 8px;
                font-size: 18px;
                font-family: 'Big Shoulders Display', sans-serif;
                font-weight: 700;
                letter-spacing: 1px;
            }

            .description {
                padding: 8px;
                font-size: 9px;
                font-weight: normal;
                color: var(--grey-primary);
            }
        }
    }
}

@media (max-width: 500px) {
    .disabled-nav {
        height: 100%;
        width: 100%;
        background-color: rgba(61, 61, 61, 0.7);
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
}

@media (max-width: 1024px) {
    .navigation-modal {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        width: 95%;
        height: 89%;
        background-color: rgba(0, 0, 0);
        border: 1px solid var(--grey-dark);
        z-index: 999;

        .modal-header {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 10px 20px;
            border-bottom: 1px solid var(--grey-dark);
        }

        .modal-content {
            overflow-y: auto;

            nav {
                height: 100%;
                display: flex;
                flex-direction: column;
                position: relative;

                a {
                    text-decoration: none;
                    color: white;
                }

                .disabled-nav {
                    display: none;
                }

                .link {
                    height: 100%;
                    border-left: 2px solid var(--grey-primary);
                    margin: 20px;

                    &.active {
                        transition: all 0.2s ease-in-out;
                        border-left: 2px solid var(--red-primary);

                        .label {
                            transition: all 0.2s ease-in-out;
                            background-color: var(--red-primary-dark);
                        }
                    }

                    .label {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                        width: 100%;
                        background-color: var(--grey-dark);
                        padding-left: 8px;
                        font-size: 18px;
                        font-family: 'Big Shoulders Display', sans-serif;
                        font-weight: 700;
                        letter-spacing: 1px;
                    }

                    .description {
                        padding: 8px;
                        font-size: 9px;
                        font-weight: normal;
                        color: var(--grey-primary);
                    }
                }
            }

            .bottom {
                padding: 20px;

                .effects {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }

                .label {
                    font-size: 18px;
                    color: var(--red-primary);
                    letter-spacing: 1px;
                }

                .text {
                    font-size: 16px;
                    font-weight: normal;
                    color: var(--grey-primary);
                    font-family: 'Iceland', sans-serif;
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
            }

        }
    }

    .navigation-button {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 10px auto;
        text-align: center;

        input {
            width: 45%;
            height: 50px;
            background-color: transparent;
            color: var(--red-primary);
            font-size: 18px;
            font-family: 'Big Shoulders Display', sans-serif;
            font-weight: 700;
            letter-spacing: 1px;
            border: 2px solid var(--red-primary);
            cursor: pointer;
            position: relative;

            &.active {
                background-color: var(--red-primary);
                color: black;
            }
        }
    }

    .navigation-container {
        display: none;
    }
}
</style>