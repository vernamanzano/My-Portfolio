<template>
  <div id="app">
    <vue-particles
        class="particle-container"
        id="tsparticles"
        :particlesInit="particlesInit"
        :particlesLoaded="particlesLoaded"
        :options="{
                background: {
                    color: {
                        value: '#fff'
                    }
                },
                fullScreen: {
                  enable: true,
                  zIndex: -1,
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: 'push'
                        },
                        onHover: {
                            enable: true,
                            mode: 'repulse'
                        },
                        resize: true
                    },
                    modes: {
                        bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.8,
                            size: 40
                        },
                        push: {
                            quantity: 4
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        }
                    }
                },
                particles: {
                    color: {
                        value: '#334155'
                    },
                    links: {
                        color: '#334155',
                        distance: 150,
                        enable: true,
                        opacity: 0.1,
                        width: 1
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outMode: 'bounce',
                        random: false,
                        speed: 1,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1800
                        },
                        value: 70
                    },
                    opacity: {
                        value: 0.1
                    },
                    shape: {
                        type: 'circle'
                    },
                    size: {
                        random: true,
                        value: 5
                    },
                },
                detectRetina: true
            }"
    />
    <SiteNavigation />
    <RouterView />
  </div>
</template>

<script setup>
  import { RouterView } from 'vue-router';
  import SiteNavigation from './components/SiteNavigation.vue';
  import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

  const particlesInit = async engine => {
      //await loadFull(engine);
      await loadSlim(engine);
  };

  const particlesLoaded = async container => {
      console.log("Particles container loaded", container);
  };
</script>

<style>
</style>