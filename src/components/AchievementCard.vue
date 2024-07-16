<script setup>
const props = defineProps({
    achievement: Object
});

const isDate = (date) => {
    return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
};
</script>

<template>
    <div class="achievement-container" :class="{ 'half-opacity': !isDate(props.achievement.achieved_at) }">
        <div class="top">
            <div class="image-container">
                <img :src="props.achievement.image" alt=""/>
            </div>
            <div class="text-container">
                <h3 :style="{ color: `rgb(var(--${props.achievement.type}))` }">{{ props.achievement.title }}</h3>
                <p>{{ props.achievement.description }}</p>
            </div>
        </div>
        <div class="bottom">
            <span class="type" :style="{ backgroundColor: `rgb(var(--${props.achievement.type}))` }">{{ props.achievement.type }}</span>
            <p class="achieved_at" :style="{ backgroundColor: `rgba(var(--${props.achievement.type}), 0.1)` }">ACHIEVED : {{ props.achievement.achieved_at ? props.achievement.achieved_at : 'ONGOING'}}</p>
        </div>
    </div>
</template>

<style lang="scss">
.achievement-container {
    --legendary: 232, 187, 74;
    --epic: 232, 74, 74;
    --rare: 74, 175, 232;
    --common: 93, 226, 106;

    display: flex;
    flex-direction: column;
    border: 1px solid var(--grey-lower);
    background: linear-gradient(90deg, #e84a6600 0%, #e84a6618 100%);
    margin: 10px 0;

    &.half-opacity {
        opacity: 0.5;
    }

    h3, p, span {
        text-transform: uppercase;
    }

    .top {
        display: flex;
        align-items: center;

        .image-container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100px;

            img {
                padding-top: 10px;
                margin: 0 20px;
                width: 80px;
                height: 80px;
            }
        }

        .text-container {
            display: flex;
            flex-direction: column;
            margin-left: 20px;
            padding-bottom: 10px;

            h3 {
                font-size: 22px;
            }

            p {
                font-size: 14px;
                color: var(--grey-primary);
            }
        }
    }

    .bottom {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid var(--grey-lower);

        p {
            font-size: 14px;
            width: 100%;
        }

        .achieved_at {
            padding: 0 20px;
            color: white;
        }

        .type {
            text-align: center;
            width: 130px;
            color: black;
            font-size: 14px;
        }
    }

}
</style>