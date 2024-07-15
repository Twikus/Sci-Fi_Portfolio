<script setup lang="ts">
import { ref, computed } from 'vue';

const projects = ref([
    {
    title: "PORTFOLIO PROJECT",
    technology: "VUE.JS, SCSS",
    description: "BUILD THIS WEBSITE. A PORTFOLIO PROJECT TO SHOWCASE YOUR WORK. YOU CAN USE THE DESIGN PROVIDED OR CREATE YOUR OWN.",
    link: "#",
    image: "/src/assets/img/creations/portfolio.png",
    },
    {
    title: "MOTOQUIZ",
    technology: "LARAVEL, DOCKER, JAVASCRIPT",
    description: "MOTOQUIZ IS AN INTERACTIVE REVIEW PLATFORM FOR ASPIRING MOTORCYCLISTS TAKING THEIR HIGHWAY CODE TEST.",
    link: "#",
    image: "/src/assets/img/creations/motoquiz.png",
    },
    {
    title: "POKEDEX",
    technology: "REACT NATIVE, EXPO",
    description: "A SIMPLE POKEDEX APP THAT DISPLAYS POKEMON DATA FROM AN API. YOU CAN SEARCH FOR POKEMON BY NAME OR ID.",
    link: "#",
    image: "/src/assets/img/creations/pokedex.jpg",
    },
]);

const activeIndex = ref(0);

const carouselStyle = computed(() => {
    return {
        transform: `rotateY(${activeIndex.value * -120}deg)`,
    };
});

const getSlideStyle = (index) => {
    const angle = (360 / projects.value.length) * index;
    const translateZ = 250;
    return {
        transform: `rotateY(${angle}deg) translateZ(${translateZ}px)`,
    };
};

const next = () => {
    activeIndex.value = (activeIndex.value + 1) % projects.value.length;
};

const prev = () => {
    activeIndex.value = (activeIndex.value - 1 + projects.value.length) % projects.value.length;
};
</script>

<template>
    <div class="carousel">
        <div class="carousel__container" :style="carouselStyle">
            <div
                v-for="(project, index) in projects"
                :key="index"
                class="carousel__slide"
                :class="{ 'carousel__slide--active': index === activeIndex }"
                :style="getSlideStyle(index)"
            >
                <div class="container_corner">
                    <div class="top-left"></div>
                    <div class="top-right"></div>
                    <div class="bottom-right"></div>
                    <div class="bottom-left"></div>
                    
                    <div class="carousel__img_container">
                        <img :src="project.image" :alt="project.title" class="carousel__image" />
                        <input type="button" value="VIEW LIVE" class="carousel__button_view" :disabled="index !== activeIndex"></input>
                    </div>

                </div>

                <div class="carousel__info">
                    <h3>{{ project.title }}</h3>
                    <p class="technology">{{ project.technology }}</p>
                    <p class="description">{{ project.description }}</p>
                </div>
            </div>
        </div>
        <button @click="prev" class="carousel__button carousel__button--prev">‹</button>
        <button @click="next" class="carousel__button carousel__button--next">›</button>
    </div>
</template>

<style scoped lang="scss">
  .carousel {
    position: relative;
    display: flex;
    height: 70vh; 
    perspective: 1000px;
  }
  .carousel__container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    transition: transform 1s;
  }
  .carousel__slide {
    position: absolute;
    width: 300px;
    height: 350px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transform-style: preserve-3d;
    transition: opacity 1s, transform 1s;

    .container_corner {
        position: relative;
        width: 100%;
        height: 100%;
        margin-bottom: 10px;

        .top-left, .top-right, .bottom-right, .bottom-left {
            position: absolute;
            width: 10px;
            height: 10px;
        }
    
        .top-left {
            top: -2px;
            left: -2px;
            border-top: 3px solid var(--red-primary);
            border-left: 3px solid var(--red-primary);
        }
    
        .top-right {
            top: -2px;
            right: -2px;
            border-top: 3px solid var(--red-primary);
            border-right: 3px solid var(--red-primary);
        }
    
        .bottom-right {
            bottom: -2px;
            right: -2px;
            border-bottom: 3px solid var(--red-primary);
            border-right: 3px solid var(--red-primary);
        }

        .bottom-left {
            bottom: -2px;
            left: -2px;
            border-bottom: 3px solid var(--red-primary);
            border-left: 3px solid var(--red-primary);
        }  
    }

    .carousel__img_container {
        height: 100%;
        width: 300px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: end;
        background-color: black;
        overflow: hidden;

          .carousel__image {
            height: 250px;
            object-fit: contain;
            z-index: 100;
            margin: auto;
          }
      }
  }

    .carousel__info {
        h3 {
            font-family: 'Big Shoulders Display', sans-serif;
            font-size: 18px;
            font-weight: 700;
            color: var(--red-primary);
            height: 20px;
            display: flex;
            width: 100%;

            &::after {
                content: '';
                flex-grow: 1;
                border-bottom: 2px dotted;
                margin-left: 10px;
            }
        }

        p {
            font-family: 'Iceland', sans-serif;
            font-size: 13px;

            &.technology {
                color: white;
            }

            &.description {
                color: var(--grey-primary);
            }
        }
    }

  .carousel__button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    z-index: 1;
    padding: 0.5rem 1rem;
    border-radius: 5px;
  }

  .carousel__button--prev {
    left: 10px;
  }

  .carousel__button--next {
    right: 10px;
  }

  .carousel__button_view {
    background-color: transparent;
    color: white;
    border: 1px solid var(--red-primary);
    padding: 5px 10px;
    font-family: 'Iceland', sans-serif;
    width: 80px;
    margin-top: 10px;
    transition: 0.5s;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
        background-color: transparent;
        color: white;
        border: 1px solid grey;
    }
  }

  .carousel__slide--active .carousel__button_view {
    &:hover {
        transition: 0.5s;
        cursor: pointer;
        background-color: var(--red-primary);
        color: black;
    }
  }
</style>

