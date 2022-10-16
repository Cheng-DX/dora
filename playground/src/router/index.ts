import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { HomeOutline } from '@vicons/ionicons5'
import type { Component } from 'vue'
import TheContainer from '~/components/layout/TheContainer.vue'

declare module 'vue-router' {
  interface RouteMeta {
    /**
     * route title
     */
    title?: string
    /**
     * menu and breadcrumb icon
     */
    icon?: Component
  }
}

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    component: TheContainer,
    redirect: '/index',
    meta: {
      title: 'root',
      skip: true,
    },
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('~/views/index.vue'),
        meta: {
          title: 'index',
          icon: HomeOutline,
        },
      }],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
