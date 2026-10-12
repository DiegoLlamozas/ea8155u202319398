import {createRouter, createWebHistory} from 'vue-router'
import Home from "./shared/presentation/views/home.vue";
import PageNotFound from "./shared/presentation/views/page-not-found.vue";


const pageNotFound = () => import('./shared/presentation/views/page-not-found.vue')
const routes = [
    {path : '/home', name: 'Home', component: Home},
    {path: '/', redirect: '/home'},
    {path: '/:pathMatch(.*)*', name:'not-found', component: PageNotFound, meta: { title: 'Page Not Found' }}
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
})

router.beforeEach((to,from) => {
    console.log(`Navigating from ${from.name} to ${to.name}`);
    let baseTitle = 'Paws & Claws';
    document.title = `${baseTitle} ${to.meta['title']}`;

    return true;
})

export default router;