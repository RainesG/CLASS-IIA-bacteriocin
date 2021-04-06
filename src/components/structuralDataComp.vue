<template>
  <div class="structuralData">
    <ul class="data">
      <div class="flex space-evenly title">
        <span class="name">NAME</span>
        <span class="uniport">UNIPROT</span>
        <span class="aps">APS</span>
        <span class="discription">DISCRIPTION</span>
      </div>
      <li v-for="(item, index) in navList" :key="index">
        <span class="name">
          {{ item.name }}
        </span>
        <span class="link" @click="getLinkData()">
          {{ item.link1 }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import {get} from '@/config/http'

export default {
  name: "StructuralData",
  data() {
    return {
      navList: this.test,
      // navList:null
    };
  },
  props: ["test"],
  watch: {
    test: {
      deep: true,
      async handler(nv) {
        this.navList = nv;
      },
    },
  },
  methods: {
    async getLinkData() {
      // await console.log();
      const link1 = Object.values(this.navList)[0].link1
      const result = get(link1)
      console.log(result);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex {
  display: flex;
}

.space-evenly {
  justify-content: space-evenly;
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

li {
  display: block;
  padding: 10px;
  background-color: #ede9ef;
  /* border-bottom: 2px solid #62386f; */
  border-top: 3px solid #fff;
  padding: 9px;
}

li:hover {
  background-color: #62386f;
}

li:hover .link {
  color: white;
}

.data .title {
  padding: 10px;
  color: #605e5e;
}

.data .title span {
  cursor: default;
}

.data .title span:hover {
  text-decoration: none;
}

.data li {
  display: flex;
  justify-content: space-evenly;
}

.data .name,
.data .uniport,
.data .aps {
  flex: 10%;
}

.data .name {
  color: #8bc34a;
}

.data .discription {
  flex: 70%;
}

h2 {
  text-align: center;
  font-weight: 500;
  line-height: 1.2;
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
