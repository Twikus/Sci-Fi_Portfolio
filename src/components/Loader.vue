<template>
    <div class="loader-container">
        <div class="square">
            <div class="edge top right"></div>
            <div class="edge top left"></div>
            <div class="edge bottom right"></div>
            <div class="edge bottom left"></div>
        </div>
    </div>
</template>

<style lang="scss">
    $animation-time: 2s;
    $square-size: 14px;
    $border-offset: 10px;

    .loader-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background-color: black;

        .square {
          position: relative;
          width: $square-size;
          height: $square-size;
          background: var(--red-primary);
          animation: rotation $animation-time cubic-bezier(.6,-0.28,.74,.05) infinite;
    
          .edge {
            box-sizing: border-box;
            position: absolute;
            background: transparent;
            z-index: 1;
    
            &.top {
              border-top: 1px solid var(--red-primary);
              top: 0;
              bottom: calc(100% - 1px);
            }
    
            &.bottom {
              border-bottom: 1px solid var(--red-primary);
              bottom: 0;
              top: calc(100% - 1px);
            }
    
            &.right {
              border-right: 1px solid var(--red-primary);
              right: 0;
              left: calc(100% - 1px);
            }
    
            &.left {
              border-left: 1px solid var(--red-primary);
              left: 0;
              right: calc(100% - 1px);
            }
    
            &.top.right {
              animation: top $animation-time linear infinite, right $animation-time linear infinite;
            }
    
            &.top.left {
              animation: top $animation-time linear infinite, left $animation-time linear infinite;
            }
    
            &.bottom.right {
              animation: bottom $animation-time linear infinite, right $animation-time linear infinite;
            }
    
            &.bottom.left {
              animation: bottom $animation-time linear infinite, left $animation-time linear infinite;
            }
          }
        }
    
        @keyframes rotation {
          0%, 25% {
            transform: rotate(0deg);
          }
          50%, 100% {
            transform: rotate(90deg);
          }
        }
    
        @keyframes top {
          0%, 75%, 100% {
            top: 0;
          }
          25%, 50% {
            top: -$border-offset;
          }
        }
    
        @keyframes right {
          0%, 75%, 100% {
            right: 0;
          }
          25%, 50% {
            right: -$border-offset;
          }
        }
    
        @keyframes bottom {
          0%, 75%, 100% {
            bottom: 0;
          }
          25%, 50% {
            bottom: -$border-offset;
          }
        }
    
        @keyframes left {
          0%, 75%, 100% {
            left: 0;
          }
          25%, 50% {
            left: -$border-offset;
          }
        }
    }
</style>