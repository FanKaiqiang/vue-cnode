<template>
  <div class="post-list">
    <nav>
      <ul class="tabs">
        <li class="now">
          <a href="#">全部</a>
        </li>
        <li>
          <a href="#">精华</a>
        </li>
        <li>
          <a href="#">分享</a>
        </li>
        <li>
          <a href="#">回答</a>
        </li>
        <li>
          <a href="#">招聘</a>
        </li>
      </ul>
    </nav>
    <div class="list">
      <ul>
        <li v-for="(post,key) in posts" :key="key">
          <img
            class="avatar"
            :src="post.author.avatar_url"
            alt="avatar"
            :title="post.author.loginname"
          >
          <span class="count-wrapper">
            <span class="reply_count">{{post.reply_count}}/</span>
            <span class="visit_count">{{post.visit_count}}</span>
          </span>
          <span :class="{tab:true,green:post.good||post.top}">{{post|tabFormatter}}</span>
          <span class="title-wrapper">
            <router-link
              :to="{name:'post_content',params:{id:post.id}}"
              :title="post.title"
            >{{post.title}}</router-link>
          </span>
          <time>{{post.last_reply_at|formatDate}}</time>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostList",
  data() {
    return {
      posts: []
    };
  },
  methods: {
    getData() {
      this.$axios
        .get("https://cnodejs.org/api/v1/topics", {
          page: 1,
          limit: 20
        })
        .then(res => {
          console.dir(res.data.data);
          this.posts = res.data.data;
        });
    }
  },
  beforeMount() {
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
}
a {
  text-decoration: none;
}

.post-list {
  background-color: #fff;
  margin-top: 1em;
  > nav {
    display: flex;
    align-items: center;
    background-color: #f6f6f6;
    height: 40px;
    > .tabs > li {
      display: inline-block;
      margin-left: 1.4em;
      padding: 2px 5px;
      border-radius: 4px;
      font-size: 14px;
      color: #80bd01;
      &.now {
        color: #fff;
        background-color: #80bd01;
      }
      > a {
        color: inherit;
        text-overflow: ellipsis;
        font-size: 13px;
      }
    }
  }
  > .list > ul > li {
    height: 3.2em;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    white-space: nowrap;
    position: relative;
    &:hover {
      background-color: #f5f5f5;
    }
    > .avatar {
      width: 30px;
      margin: 0 0.8em;
      cursor: pointer;
    }
    > .count-wrapper {
      width: 4em;
      > .reply_count {
        color: #b778c0;
        font-size: 13px;
      }
      > .visit_count {
        color: #dbc4b4;
        font-size: 12px;
      }
    }
    > .tab {
      margin-left: 0.5em;
      padding: 2px 5px;
      border-radius: 4px;
      font-size: 14px;
      background-color: #e5e5e5;
      color: #999;
      &.green {
        background-color: #80bd01;
        color: #fff;
      }
    }
    > .title-wrapper {
      max-width: 60%;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-left: 0.5em;
      > a {
        display: inline-block;
        text-overflow: ellipsis;
        color: #333;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    > time {
      color: #a0b2e0;
      font-size: 12px;
      position: absolute;
      right: 1em;
    }
  }
}
</style>
