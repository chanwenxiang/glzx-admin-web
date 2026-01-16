import { createRouter, createWebHistory} from 'vue-router'
import { constantRoute } from './routes'

let routes = createRouter({
    history: createWebHistory(),
    routes: constantRoute,
    //滚动行为
    scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default routes;
