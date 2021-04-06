<template>
  <div class="generalData">
    <ul class="data">
      <div class="flex space-evenly title">
        <span class="id">ID</span>
        <span class="sequence" @click="getLinkData()">sequence</span>
        <span class="name">source</span>
      </div>
      <li v-for="(item, index) in navList" :key="index">
        <span class="id">
          {{ item.name }}
        </span>
        <span class="sequence">
          <!-- {{ getLinkData(item.link1) }} -->
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { get } from "@/config/http";

export default {
  name: "GeneralData",
  data() {
    return {
      navList: this.test,
    };
  },
  props: ["test"],
  watch: {
    test: {
      deep: true,
      async handler(nv) {
        this.navList = nv;
        // await console.log(nv);
      },
    },
  },
  methods: {
    async getLinkData(url) {
      if (url != null) {
        // await console.log();
        // const url = this.item.link1;
        const params = "";
        var reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
        const linkUrl = url.match(reg);

        console.log("url:" + url);
        console.log("linkUrl:" + linkUrl);
        // const uniprot = url.match(/[A-Z][0-9]{0,9}/);
        // console.log("uniprot:" + uniprot);

        const DEFAULT_CONFIG = {
          isApiHost: false,
        };
        const result = await get(linkUrl, params, DEFAULT_CONFIG);
        const parser = new DOMParser();
        const doc = parser.parseFromString(result.data, "text/html");
        const preText = doc.getElementsByTagName("pre")[0].innerText;

        const regSeq = /^[A-Z]{0,500}/;
        const sequence = preText.match(regSeq);
        console.log(sequence);
        return sequence;
      }
    },
  },
  // },
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

li:hover .sequence {
  color: white;
}

.data .title {
  padding: 10px;
  color: #605e5e;
  text-transform: uppercase;
}

.data li {
  display: flex;
  justify-content: space-evenly;
}

.data .id {
  flex: 20%;
}

.data .id {
  color: #8bc34a;
}

.data .name {
  flex: 30%;
}

.data .sequence {
  flex: 50%;
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
