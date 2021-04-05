<template>
  <div class="categories">
    <ul class="nav">
      <li
        v-for="(item, index) in navList"
        :key="index"
        :class="{ active: !(index - menuIndex) }"
        @click="menuShow(index)"
      >
        <h2>
          <span>
            {{ item }}
          </span>
        </h2>
      </li>
    </ul>

    <div v-show="menuIndex == 0" class="navContent">
      <generalData :test="test" />
      <!--此处可以换成子组件-->
    </div>
    <div v-show="menuIndex == 1" class="navContent">
      内容二
      <!--此处可以换成子组件-->
    </div>
    <div v-show="menuIndex == 2" class="navContent">
      内容三
      <!--此处可以换成子组件-->
    </div>
    <div v-show="menuIndex == 3" class="navContent">
      内容四
      <!--此处可以换成子组件-->
    </div>
  </div>
</template>

<script>
import generalData from "@/components/generalDataComp";
import { getInfoData } from "@/services/bacteriocin.service";

export default {
  name: "categories",
  components: {
    generalData,
  },
  data() {
    return {
      menuIndex: 0,
      navList: [
        "General Data",
        "Structural data",
        "Physicochemical data",
        "Anti-infective data",
      ],
      test: {},
    };
  },
  methods: {
    async menuShow(index) {
      this.menuIndex = index;
      // console.log(this.menuIndex);
      const result = await getInfoData();
      this.test = result.data;
      console.log(Object.values(this.test)[0]);
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
