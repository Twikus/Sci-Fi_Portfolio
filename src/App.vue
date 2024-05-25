<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <body>
    <RouterView />
    <img src="@/assets/img/layout.png" alt="layout" class="layout" />
    <div class="black-opacity" ></div>
    <video autoplay loop muted class="video">
      <source src="@/assets/img/background.mp4" type="video/mp4" />
    </video>
  </body>
</template>

<style scoped>
  .black-opacity {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
    z-index: -999;
  }
  .video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1000;
  }
</style>
