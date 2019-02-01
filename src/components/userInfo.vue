<template>
  <div class="userInfo">
    <section class="user">
      <nav>
        <router-link :to="{name:'root'}">主页</router-link>/
      </nav>
      <div class="wrapper">
        <div class="message">
          <img :src="user.avatar_url" alt="avatar" :title="user.loginname">
          {{user.loginname}}
        </div>
        <div class="score">{{user.score}} 积分</div>
        <div class="github">
          github:
          <a :href="'https://github.com/'+user.githubUsername">@{{user.loginname}}</a>
        </div>
        <div class="time">注册时间 {{user.create_at|formatDate}}</div>
      </div>
    </section>
    <section class="topics">
      <nav>最近创建的话题</nav>
      <ul v-if="show">
        <li v-for="(post,key) in user.recent_topics" :key="key">
          <span class="title-wrapper">
            <router-link
              :to="{name:'article',params:{id:post.id}}"
              :title="post.title"
            >{{post.title}}</router-link>
          </span>
          <time>{{post.last_reply_at|formatDate}}</time>
        </li>
      </ul>
      <div v-else class="none">暂无话题</div>
    </section>
    <section class="replies">
      <nav>最近参与的话题</nav>
      <ul v-if="show">
        <li v-for="(post,key) in user.recent_replies" :key="key">
          <span class="title-wrapper">
            <router-link
              :to="{name:'article',params:{id:post.id}}"
              :title="post.title"
            >{{post.title}}</router-link>
          </span>
          <time>{{post.last_reply_at|formatDate}}</time>
        </li>
      </ul>
      <div v-else class="none">暂无话题</div>
    </section>
  </div>
</template>
<script>
export default {
  name: "UserInfo",
  data() {
    return {
      user: [],
      show: false
    };
  },
  methods: {
    getUser() {
      this.$axios
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(res => {
          console.dir(res.data.data);
          this.user = res.data.data;
          this.show = this.user.recent_topics.length>0?true:false
        });
    }
  },
  beforeMount() {
    this.getUser();
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
.user {
  border-radius: 4px;
  background-color: #fff;

  > nav {
    height: 40px;
    background-color: #f6f6f6;
    color: #444;
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-top: 1em;
    padding: 1em;
    > a {
      color: #80bd01;
    }
  }
  > .wrapper {
    padding: 1em;
    font-size: 14px;
    color: #7790b9;
    > .message {
      display: flex;
      align-items: center;
      > img {
        width: 40px;
        margin-right: 0.5em;
      }
    }
    > .score {
      margin-top: 0.5em;
      color: #333;
    }
    .github {
      margin-top: 0.5em;
      > a {
        color: #778087;
      }
    }
    .time {
      margin-top: 0.5em;
      color: #ababab;
    }
  }
}

.topics {
  border-radius: 4px;
  background-color: #fff;
  > nav {
    height: 40px;
    background-color: #f6f6f6;
    color: #444;
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-top: 1em;
    padding: 1em;
  }
  > ul > li {
    height: 3.2em;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    white-space: nowrap;
    position: relative;
    > .title-wrapper {
      max-width: 60%;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-left: 1em;
      > a {
        display: inline-block;
        text-overflow: ellipsis;
        color: #3996ce;
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
.replies {
  border-radius: 4px;
  background-color: #fff;
  > nav {
    height: 40px;
    background-color: #f6f6f6;
    color: #444;
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-top: 1em;
    padding: 1em;
  }
  > ul > li {
    height: 3.2em;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    white-space: nowrap;
    position: relative;
    > .title-wrapper {
      max-width: 60%;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-left: 1em;
      > a {
        display: inline-block;
        text-overflow: ellipsis;
        color: #3996ce;
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
.none{
  padding: 1em;
  font-size: 14px;
}
</style>