<template>
  <navBarComp />
  <router-view></router-view>
</template>

<script>
import navBarComp from "@/components/navBarComp";

export default {
  name: "App",
  components: {
    navBarComp,
  },
};
</script>

<style>
@import "assets/public.css";
</style>
