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
      }, 2000);
    }, 2500);
  });
</script>

<template>
  <Transition name="fade">
    <Loader v-if="loading" />
  </Transition>
  <Transition name="fade-in">
    <main v-if="showContent" class="lp_layout">
      <div class="first_container">
        <h1>HI!</h1>
      </div>
      <div class="secondary_container">
        <h2>WELCOME ON MY PERSONAL WEBSITE</h2>
        <p>I designed this website to resemble a game/sci-fi interface, with all the text reflecting this theme.</p>
        <p>You will find "achievements" or "quests" that show the progress in my professional life and the projects I am currently working on.</p>
        <div class="button_container">
          <button type="submit">PLAY</button>
        </div>
      </div>
    </main>
  </Transition>
</template>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .fade-in-enter-active {
    transition: opacity 1s;
  }
  .fade-in-enter {
    opacity: 0;
  }

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
</style>
