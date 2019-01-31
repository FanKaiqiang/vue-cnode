import Vue from 'vue'
import Router from 'vue-router'
import PostList from '../components/postList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      components: {
        main: PostList
      }
    }
  ]
})
