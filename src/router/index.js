import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DepartmentsView from '../views/DepartmentsView.vue';
import DepartmentDetailView from '../views/DepartmentDetailView.vue';
import PositionDetailView from '../views/PositionDetailView.vue';
import RequirementsView from '../views/RequirementsView.vue';
import AboutView from '../views/AboutView.vue';
import Contacts from '@/views/Contacts.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/departments/:bankId', component: DepartmentsView },
  { path: '/departments/:bankId/:departmentId', component: DepartmentDetailView },
  { path: '/positions/:departmentId/:unitId', component: PositionDetailView },
  { path: '/requirements/:positionId', component: RequirementsView },
  { path: '/about', component: AboutView },
  { path: '/contacts', name: 'Contacts', component: Contacts },
];

const router = createRouter({
  history: createWebHistory('/JobInBank/'),
  routes,
});

export default router;
