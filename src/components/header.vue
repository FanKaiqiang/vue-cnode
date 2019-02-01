<template>
  <div class="header">
    <router-link :to="{name:'root'}">
      <img src="../assets/cnodejs_light.svg" alt="logo">
    </router-link>
    <ul>
      <li>
        <a href="#">首页</a>
      </li>
      <li>
        <a href="#">新手入门</a>
      </li>
      <li>
        <a href="#">API</a>
      </li>
      <li>
        <a href="#">关于</a>
      </li>
      <li>
        <a href="#">注册</a>
      </li>
      <li>
        <a href="#">登录</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style  lang="scss" scoped>
.header {
  display: flex;
  background-color: #444;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  > a > img {
    width: 120px;
    margin-left: 65px;
  }
  > ul {
    list-style: none;
    margin-right: 80px;
    > li {
      display: inline-block;
      margin-left: 30px;
      > a {
        text-decoration: none;
        color: #ccc;
        font-size: 13px;
        &:hover {
          color: #fff;
        }
      }
    }
  }
}
</style>