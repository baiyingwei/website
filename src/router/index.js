import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/home/HelloWorld'//首页
import Test from '../components/note/HelloWorld'//需要跳转的页面 给组件重新命名

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {//首页
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {//需要跳转的页面
      path:'/test',
      name:'test',
      component:Test//组件名字
    }
  ]
})

