import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: HomeView},
        {path: '/about', name: 'about', component: import('../views/AboutView.vue')},
        {path: '/chats', name: 'chats', component: import('../views/ChatsView.vue')},
        {path: '/chats/:id', component: import('../views/ChatsView.vue')}
    ]
});

export default router;
