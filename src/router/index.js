import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
import Skeleton from '@/components/Skeleton'
import SkeletonDetail from '@/components/SkeletonDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/skeleton',
      name: 'Skeleton',
      component: Skeleton
    },
    {
      path: '/skeletonDetail',
      name: 'SkeletonDetail',
      component: SkeletonDetail
    }
  ]
})
