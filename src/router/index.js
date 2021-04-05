import HomePage from "@/pages/HomePage";
import BrowsePage from "@/pages/BrowsePage"
import BlastPage from "@/pages/BlastPage"
import CorrelationsPage from "@/pages/CorrelationsPage"
import ContactPage from "@/pages/ContactPage"
import CategoriesPage from "@/pages/CategoriesPage"

import {
    createRouter,
    createWebHistory
} from 'vue-router'


const routes = [{
    path: '/',
    name: 'HomePage',
    component: HomePage
}, {
    path: '/BrowsePage',
    name: 'BrowsePage',
    component: BrowsePage
}, {
    path: '/BlastPage',
    name: 'BlastPage',
    component: BlastPage
}, {
    path: '/CorrelationsPage',
    name: 'CorrelationsPage',
    component: CorrelationsPage
}, {
    path: '/CategoriesPage',
    name: 'CategoriesPage',
    component: CategoriesPage
}, {
    path: '/ContactPage',
    name: 'ContactPage',
    component: ContactPage
}]

export default createRouter({
    history: createWebHistory(),
    routes
})