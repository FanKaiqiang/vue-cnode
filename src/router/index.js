import Vue from 'vue'
import Router from 'vue-router'
import PostList from '../components/postList'
import Article from '../components/article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      components: {
        main: PostList
      }
    },
    {
      path: '/topic/:id',
      name: 'article',
      components: {
        main: Article
      }
    }
  ]
})
