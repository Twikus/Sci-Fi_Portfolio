<script setup>
import Loader from '@/components/Loader.vue';
import { ref, onMounted } from 'vue';

let loading = ref(true);
  let showContent = ref(false);

  onMounted(() => {
    setTimeout(() => {
      loading.value = false;
      setTimeout(() => {
        showContent.value = true;
      }, 1000);
    }, 2500);
  });
</script>

<template>
  <Transition name="fade-out" >
    <Loader v-if="loading" />
  </Transition>
  <Transition name="fade-in" >
    <main v-if="showContent" class="lp_layout">
      <div class="first_container">
        <h1>HI!</h1>
      </div>
      <div class="secondary_container">
        <h2>WELCOME ON MY PERSONAL WEBSITE</h2>
        <p>I created this website to resemble a game/sci-fi interface, with all the text reflecting this theme.</p>
        <p>You will find "achievements" or "quests" that show the progress in my professional life and the projects I am currently working on.</p>
        <div class="button_container">
          <button type="submit">PLAY</button>
        </div>
      </div>
    </main>
  </Transition>
</template>

<style lang="scss">
  .lp_layout {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;

    .first_container {
      
      h1 {
          font-family: "Big Shoulders Display", sans-serif;
          font-size: 538px;
          font-weight: 700;
          letter-spacing: -0.06em;
          color: var(--red-primary);
      }
    }
  
    .secondary_container {
      width: 40%;
      margin-left: 80px;
      
      h2 {
        font-size: 26px;
        margin-bottom: 40px;
      }
  
      p {
        font-size: 20px;
        margin-bottom: 20px;
      }

      .button_container {
        display: flex;
        justify-content: center;
        
        button {
          width: 260px;
          margin-top: 70px;
          font-size: 20px;
          font-family: 'Big Shoulders Display', sans-serif;
          font-weight: 700;
          padding: 10px 20px;
          background-color: transparent;
          border: 1px solid var(--red-primary);
          color: var(--red-primary);
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s;

          &:hover {
            background-color: var(--red-primary);
            color: white;
            transition: all 0.3s;
          }
        }
      }

    }


  }

  /* Transitions */

  .fade-out-leave-active {
    animation: fade-out .5s;
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      display: none;
      opacity: 0;
    }
  }

  .fade-in-enter {
    opacity: 0;
    visibility: hidden;
  }

  .fade-in-enter-active {
    animation: fade-in 1s;
  }

  @keyframes fade-in {
    0% {
      visibility: visible;
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
</style>
