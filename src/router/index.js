import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/article'
import PostList from '../components/postList'
import UserInfo from '../components/userInfo'

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
      name:'article',
      path:'/topic/:id',
      components:{
        main:Article
      }
    },
    {
      name:'userInfo',
      path:'/user/:name',
      components:{
        main:UserInfo
      }
    }
  ]
})
