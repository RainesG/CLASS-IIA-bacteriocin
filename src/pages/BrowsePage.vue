<template>
  <navBarComp />
  <categories/>
  
</template>

<script>
import navBarComp from "@/components/navBarComp";
import categories from "@/components/categories"

export default {
  name: "HomePage",
  components: {
    navBarComp,
    categories
  },
};
</script>