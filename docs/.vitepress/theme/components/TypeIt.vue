<template></template>
<script setup lang="ts">
import { onMounted } from "vue";
import TypeIt from "typeit";

onMounted(() => {
  new TypeIt(".tagline", {
    strings: [
      " Rust 语言实现的 Nacos 服务平台，兼容 Nacos(Java)",
    ],
    speed: 200,
  }).go();
});
</script>
