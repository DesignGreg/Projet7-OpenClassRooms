import ReadComments from './components/core-components/ReadComments.vue';
import AddComments from './components/core-components/AddComments.vue';
import AddRestaurant from './components/core-components/AddRestaurant.vue';
import LegalNotices from './components/core-components/LegalNotices.vue';

export const routes = [
  { path: '/read-comments', component: ReadComments },
  { path: '/add-comments', component: AddComments },
  { path: '/add-restaurant', component: AddRestaurant },
  { path: '/legal-notices', component: LegalNotices }
];