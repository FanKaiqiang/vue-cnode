<template>
  <div id="app">
    <Header/>
    <main>
      <PostList/>
    </main>
  </div>
</template>

<script>
import Header from "./components/header";
import PostList from "./components/postList";
export default {
  name: "App",
  components: {
    Header,
    PostList
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app{
  background-color: #e1e1e1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
main{
  width: 80%;
  margin-top: 20px;
  border-radius: 4px;
}
</style>
