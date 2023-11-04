import { createRouter, createWebHistory } from 'vue-router';
import HeroView from '../views/HeroView.vue';
import NewContactView from '../views/NewContactView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HeroView,
    },
    {
        path: '/add',
        name: 'add',
        component: NewContactView,
    },
    {
        path: '/contact/:id',
        name: 'contact',
        component: ContactView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
