<template>
    <div class="beginning-container">
        <h2>NAVIGATING THE NEON CORRIDORS OF INTERSTELLAR DATA STREAMS, BRINGING INNOVATION AND EXCITEMENT TO USERS IN
            EVERY CORNER OF THE GALAXY.</h2>
        <p>ARTWORK GENERATED WITH MIDJOURNEY</p>
        <img src="/src/assets/img/animal.png" alt="whale">
    </div>
</template>

<style lang="scss">
.beginning-container {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
        height: min-content;
    }

    h2 {
        font-size: 18px;
        width: 600px;
        text-align: center;
    }

    p {
        font-size: 12px;
        margin-top: 10px;
        color: var(--grey-primary);
    }

    img {
        width: 100%;
        opacity: 0.7;
    }
}
</style>