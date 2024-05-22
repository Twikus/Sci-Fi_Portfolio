<script setup lang="ts">

const isClicked = ref(false) 
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

</script>

<template>
    <header>
        <div class="header-left">
            <div>
                <span class="number">22</span>
                <span class="text">LEVEL</span>
            </div>
            <div>
                <input v-if="!isClicked" type="button" value="+" @click="addClick" />
                <input v-if="isClicked" type="button" value="✓" disabled />
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

    <div>
        <div class="content-right">
            <div class="top">
                
            </div>
            <div class="bottom"></div>
        </div>
        <div class="content-left"></div>
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

            input {
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
</style>