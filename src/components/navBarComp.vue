<template>
  <div class="sticky-wrapper">
    <div class="container">
      <nav class="site-navigation position-relative text-right">
        <ul class="site-menu main-menu">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/BrowsePage">Browse</router-link>
          </li>
          <li>
            <router-link to="/BlastPage">BLAST</router-link>
          </li>
          <li>
            <router-link to="CorrelationsPage">Correlations</router-link>
          </li>
          <li>
            <router-link to="CategoriesPage"
              >Anti-infective properties</router-link
            >
          </li>
          <li><router-link to="ContactPage">Contact</router-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBarComp",
  props: {
    // msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sticky-wrapper {
  background-color: red;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: #fff;
  height: 54px;
  border-bottom: 1px solid #efefef;
}

li:not(:first-of-type) {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #000;
  font-size: 0.8rem;
  letter-spacing: 0.05rem;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
  padding: 0.5rem 1rem;
}

li:first-of-type a {
  padding-left: 0;
}

a:hover {
  color: rgba(103, 8, 117, 1);
}
</style>
