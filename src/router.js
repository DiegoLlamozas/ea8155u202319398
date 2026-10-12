import {createRouter, createWebHistory} from 'vue-router'

const routes = []

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