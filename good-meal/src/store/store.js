import Vue from 'vue';
import Vuex from 'vuex';

import restaurantFactory from '../interfaces/restaurantFactory';
console.log(restaurantFactory);

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    restaurantList: [],
    visibleRestaurant: [],
    sortValue: [],
  },
  getters: {
    getRestaurantById: (state) => {
      return (id) => {
        return state.restaurantList[id];
      }
    },
    getRestaurantInfo: state => {
      return state.visibleRestaurant;
    },
  },
  mutations: {
    setRestaurantList: (state, {
      list
    }) => {
      state.restaurantList = list.map(formatRestaurant);
    },
    selectVisibleRestaurant(state, bounds) {
      state.visibleRestaurant = state.restaurantList.filter((restaurant) => {
        return restaurant.long >= bounds.ia.j && restaurant.long <= bounds.ia.l && restaurant.lat >= bounds.na.j && restaurant.lat <= bounds.na.l;
      });
    },
    addRestaurant() {
      // push dans array restaurantList
    },
    addComment() {
      // push dans array restaurantList, en fonction de l'index du restaurant, et donc dans le sous-tableau ratings
    }
  },
  actions: {
    getData: async function (context) {
      restaurantFactory.getRestaurantList()
        .then((restaurantList) => {
          context.commit('setRestaurantList', {
            list: restaurantList
          });
          return true;
        }, (err) => {
          console.log(err);
          return false;
        });
    }
  }
});

function formatRestaurant(restaurant) {
  const sum = restaurant.ratings.reduce((acc, rating) => {
    return acc + rating.stars;
  }, 0);
  return {
    ...restaurant,
    averageRating: Math.round(sum / restaurant.ratings.length),
  }
}