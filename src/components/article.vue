<template>
  <div class="article">
    <header>
      <div class="titleWrapper">
        <span :class="{tab:true,green:post.good||post.top}">{{post|tabFormatter}}</span>
        <h2>{{post.title}}</h2>
      </div>
      <ul class="message">
        <li>
          发布于
          <time>{{post.create_at|formatDate}}</time>
        </li>
        <li>
          作者
          <a href="#">{{author}}</a>
        </li>
        <li>{{post.visit_count}}次浏览</li>
        <li>来自 {{from}}</li>
      </ul>
    </header>
    <article v-html="word"></article>
    <div class="comment">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Article",
  data() {
    return {
      post: []
    };
  },
  computed: {
    from() {
      if (this.post.tab == "ask") {
        return "问答";
      } else if (this.post.tab == "share") {
        return "分享";
      } else {
        return "招聘";
      }
    },
    author() {
      return this.post.author ? this.post.author.loginname : "";
    },
    word(){
      return this.post.content?this.post.content.replace(/\n/g,"<br/>").replace("<br><li>","<li>"):''
    }
  },
  methods: {
    getData() {
      this.$axios
        .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then(res => {
          console.dir(res.data.data.content.replace(/\n/g,"<br/>"));
          this.post = res.data.data;
        });
    }
  },
  beforeMount() {
    this.getData();
  }
};
</script>
<style>
/* @import url('../assets/markdown-github.css');  */
.comment > ul {
  list-style: none;
}
a {
  text-decoration: none;
}
.article {
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.titleWrapper {
  margin: 1em 0;
}
.titleWrapper > .tab {
  margin: 0.8em;
  padding: 2px 5px;
  border-radius: 4px;
  font-size: 14px;
  background-color: #e5e5e5;
  color: #999;
}
.titleWrapper > .tab.green {
  background-color: #80bd01;
  color: #fff;
}
.titleWrapper > h2 {
  display: inline-block;
  color: #333;
}
.message{
  padding-bottom: 1em;
  border-bottom: 1px solid #e5e5e5;
}
.message > li {
  display: inline-block;

  font-size: 12px;
  margin-left: 1em;
}
.message > li::before {
  content: "• ";
}
article{
  padding: 1em 1.5em;
  font-size: 15px;
  color: #333;
}
article img{
  max-width: 100%
}
article ul{
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  margin: -1em 0;
}
article li{
  margin: -0.5em 2em;
  display: inline-block;
}
article  li::before {
  content: "•";
  margin-right: .5em;
  font-size: 18px;
}
</style>
