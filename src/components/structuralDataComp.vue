<template>
  <div class="structuralData">
    <ul class="data">
      <div class="flex space-evenly title">
        <span class="name">NAME</span>
        <span class="uniprot">UNIPROT</span>
        <span class="aps">APS</span>
        <span class="description">description</span>
      </div>
      <li v-for="(item, index) in navList" :key="(index += 2)">
        <span class="name">
          {{ item.name + (index % 2) }}
        </span>
        <span class="uniprot">
          {{
            String(item.link1.match(/[A-Z0-9]{6}/)) == "null"
              ? ""
              : String(item.link1.match(/[A-Z0-9]{6}/))
          }}
        </span>
        <span class="aps" @click="getLinkData()"> {{}} </span>
        <span class="description">
          {{ item.description }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
// import { get } from "@/config/http";

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
      const url = Object.values(this.navList);
      // const params = "";

      console.log(url);
      // const uniprot = url.match(/[A-Z][0-9]{0,9}/);
      // console.log("uniprot:" + uniprot);

      // const DEFAULT_CONFIG = {
      //   isApiHost: false,
      // };
      // const result = await get(url, params, DEFAULT_CONFIG);
      // const parser = new DOMParser();
      // const doc = parser.parseFromString(result.data, "text/html");
      // console.log(doc.getElementsByClassName("databaseTable STRUCTURE")[0]);

      // axios
      //   .get(url, params)
      //   .then((res) => {
      //     // console.log(res.data)
      //   })
      //   .catch((err) => {
      //     console.error(err);
      //   });
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

.title span {
  font-size: 18px;
  text-transform: uppercase;
  color: #000;
}

span {
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
  font-size: 12px;
  align-items: center;
  color: #605e5e;
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
.data .uniprot,
.data .aps {
  flex: 10%;
}

.data .name {
  color: #8bc34a;
}

.data .description {
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
