import { createRouter, createWebHistory } from 'vue-router'

// components
import defaultLayout from '@/components/layout/defaultLayout.vue'
import Main from '@/views/Main.vue'

// vue3-stu에 사용될 route 생성 및 설정
const routes = [
  {
    path: '/',
    name: 'Main - Vue3 stu',
    component: defaultLayout,
    children: [
      {
        path: '',
        name: 'main',
        component: Main
      }
    ]
  }
]

// VueRouter에 route를 등록하고 설정
const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes
})

// 설정한 VueRouter 내보냄
export default router
