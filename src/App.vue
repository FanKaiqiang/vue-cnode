<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="main"></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/header";
import Footer from "./components/footer";
export default {
  name: "App",
  components: {
    Header,Footer
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
  > .main {
    width: 80%;
    margin: 0 auto;
  }
}
</style>
