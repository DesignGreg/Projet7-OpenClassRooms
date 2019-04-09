import ReadComments from './components/core-components/ReadComments.vue';
import AddComment from './components/core-components/AddComment.vue';
import AddRestaurant from './components/core-components/AddRestaurant.vue';
import LegalNotices from './components/core-components/LegalNotices.vue';

export const routes = [
  { path: '/read-comments/:restaurantID', component: ReadComments },
  { path: '/add-comment/:restaurantID', component: AddComment },
  { path: '/add-restaurant', component: AddRestaurant },
  { path: '/legal-notices', component: LegalNotices }
];