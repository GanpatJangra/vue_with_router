import { createWebHashHistory,createRouter } from "vue-router";
import home from './components/home.vue';
import login from './components/login.vue';
import signup from './components/signup.vue';

const routes=[{
    name:'home',
    path:'/',
    component:home
},
{
    name:'login',
    path:'/login',
    component:login
},
{
    name:'signup',
    path:'/signup',
    component:signup
}
];

const router=createRouter({
    history:createWebHashHistory(),
    routes
});
export default router;