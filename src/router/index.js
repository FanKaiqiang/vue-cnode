import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/article'
import PostList from '../components/postList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'root',
      path:'/',
      components:{
        main:PostList
      }
    },
    {
      name:'post_content',
      path:'/topic/:id',
      components:{
        main:Article
      }
    }
  ]
})
