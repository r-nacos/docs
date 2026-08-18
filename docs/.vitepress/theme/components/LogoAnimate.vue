<template></template>
<script setup lang="ts">
import {onMounted, onUnmounted, ref} from "vue";
import {gsap} from "gsap";
import Context = gsap.Context;

let ctx: Context;

function animate() {
  const logo = ref('.VPImage.image-src')
  ctx = gsap.context(() => {
    gsap.from(logo.value, {
      // x: -200,
      x: '-50vw',
      opacity: 0,
      duration: 2,
      ease: 'power3.out',
      yoyo: true,
    })
  })
}

onMounted(() => {
  animate();
});

onUnmounted(() => {
  ctx.revert();
});

</script>
