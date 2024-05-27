<script setup lang="ts">
import { defineEmits } from 'vue';
import { playClick } from '@/helper';

defineEmits(['update:active']);

const active = ref(1); 
</script>
<template>
    <div class="navigation-container">
        <nav>
            <router-link to="/" class="link" active-class="active" @click="playClick">
                <span class="label">BEGINNING</span>
                <p class="description">SUSCIPIT EST CONSEQUATUR NEMO VOLUPTATEM EST LABORE SAEPE.</p>
            </router-link>
            <router-link to="/logs" class="link" active-class="active" @click="playClick">
                <span class="label">LOGS</span>
                <p class="description">SUSCIPIT EST CONSEQUATUR NEMO VOLUPTATEM EST LABORE SAEPE.</p>
            </router-link>
            <router-link to="/achievements" class="link" active-class="active" @click="playClick">
                <span class="label">ACHIEVEMENTS</span>
                <p class="description">SUSCIPIT EST CONSEQUATUR NEMO VOLUPTATEM EST LABORE SAEPE.</p>
            </router-link>
            <router-link to="/creations" class="link" active-class="active" @click="playClick">
                <span class="label">CREATIONS</span>
                <p class="description">SUSCIPIT EST CONSEQUATUR NEMO VOLUPTATEM EST LABORE SAEPE.</p>
            </router-link>
            <router-link to="/contact" class="link" active-class="active" @click="playClick">
                <span class="label">CONTACT</span>
                <p class="description">SUSCIPIT EST CONSEQUATUR NEMO VOLUPTATEM EST LABORE SAEPE.</p>
            </router-link>
        </nav>
    </div>
</template>

<style lang="scss">
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
</style>