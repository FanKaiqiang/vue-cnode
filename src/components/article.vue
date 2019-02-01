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
      <div class="topbar">{{post.reply_count}} 回复</div>
      <ul>
        <li v-for="(reply,index) in post.replies" :key="index" :id="reply.id">
          <div>
            <img class="avatar" :src="reply.author.avatar_url" alt="avatar">
          </div>
          <div class="content">
            <div class="authorMessage">
              <span>{{reply.author.loginname}}</span>
              <a :href="`#${reply.id}`">{{index+1}}楼•{{reply.create_at|formatDate}}</a>
            </div>
            <div class="replyMessage" v-html="reply.content"></div>
          </div>
          <div class="good">赞{{reply.ups.length}}</div>
        </li>
      </ul>
    </div>
    <footer></footer>
  </div>
</template>
<script >
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
    word() {
      return this.post.content
        ? this.post.content.replace(/\n/g, "<br/>").replace("<br><li>", "<li>")
        : "";
    }
  },
  methods: {
    getData() {
      this.$axios
        .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then(res => {
          console.dir(res.data.data);
          this.post = res.data.data;
        });
    }
  },
  beforeMount() {
    this.getData();
  }
};
</script>
<style lang="scss" >
// @import url('../assets/markdown-github.css');
.comment > ul {
  list-style: none;
}
a {
  text-decoration: none;
}
img {
  max-width: 100%;
}
.avatar {
  width: 30px;
}

.article {
  background-color: #e1e1e1;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  > header {
    background-color: #fff;
    > .titleWrapper {
      margin: 1em 0;
      > .tab {
        margin: 0.8em;
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
      > h2 {
        display: inline-block;
        color: #333;
      }
    }
    > .message {
      padding-bottom: 1em;
      border-bottom: 1px solid #e5e5e5;
      > li {
        display: inline-block;
        font-size: 12px;
        margin-left: 1em;
        &::before {
          content: "• ";
        }
      }
    }
  }
  > article {
    background-color: #fff;
    padding: 1em 1.5em;
    font-size: 15px;
    color: #333;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 14px;
      margin: -1em 0;
    }
    li {
      margin: -0.5em 2em;
      display: inline-block;
      &::before {
        content: "•";
        margin-right: 0.5em;
        font-size: 18px;
      }
    }
  }
  > .comment {
    background-color: #fff;
    margin-top: 1em;
    border-radius: 4px;
    position: relative;
    > .topbar {
      height: 40px;
      background-color: #f6f6f6;
      color: #444;
      font-size: 14px;
      display: flex;
      align-items: center;
      padding: 0.5em;
    }
    > ul > li {
      display: flex;
      border-bottom: 1px solid #f0f0f0;
      min-height: 80px;
      padding: 0.8em;
      > .content {
        margin-left: 0.8em;
        > .authorMessage {
          font-size: 12px;
        }
        > .replyMessage {
          margin: 0.5em;
        }
      }
      > .good {
        position: absolute;
        right: 1em;
      }
    }
  }
}


</style>
