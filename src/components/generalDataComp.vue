<template>
  <div class="generalData">
    <ul class="data">
      <li v-for="(item, index) in navList" :key="index">
        <h2>
          <span>
            {{ item.bacteriocin_id }}
          </span>
        </h2>
          <span style="display:block">
            {{ item.name }}
          </span>
          <span>
            {{ item.link1 }}
          </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GeneralData",
  data() {
    return {
      navList: this.test
    };
  },
  props: {
    test: {
      type: Object,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  display: block;
  padding: 10px;
}

h2 {
  text-align: center;
  font-weight: 500;
  line-height: 1.2;
}

span {
  color: #000;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
}

span:hover {
  text-decoration: underline;
}

.categories {
  display: flex;
}

.nav {
  flex: 20%;
  padding: 20px;
  background-color: #f1f1f1;
  margin-top: 100px;
}

.navContent {
  flex: 80%;
  background-color: cadetblue;
  margin-top: 100px;
}
</style>
