import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Todo from '../components/TodoList.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Sidebar from '../components/Sidebar.vue'
import NotFound from '../components/NotFound.vue'
import { useAuthStore } from '../store/auth';



const routes = [
    {   path: '/', 
        redirect: '/login'
    },
    {
        path: '/home', components: {   
            default: Home,
            LeftSideBar: Sidebar,
        },
        meta:{
            requiresAuth: true
        }
    },
    {
        path: '/todo-list', components: {   
            default: Todo,
            LeftSideBar: Sidebar,
        },
        meta:{
            requiresAuth: true
        }
    },
    {
        path: '/register', components: {
            default: Register,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/login', components: {
            default: Login,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/:pathMatch(.*)*', components: {
            default: NotFound,
            LeftSideBar: Sidebar
        }
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    if (to.meta.requiresAuth && !authStore.currentUser) {
      next('/login');
    } else {
      next();
    }
  });
  
  export default router;