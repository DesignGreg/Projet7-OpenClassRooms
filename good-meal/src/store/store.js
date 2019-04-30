import Vue from 'vue';
import Vuex from 'vuex';

import restaurantFactory from '../interfaces/restaurantFactory';
console.log(restaurantFactory);

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    restaurantList: [],
    sortValue: []
  },
  getters: {
    getRestaurantById: (state) => {
      return (id) => {
        return state.restaurantList[id];
      }
    },
    getRestaurantInfo: state => {
      const restaurantList = state.restaurantList;

      return restaurantList;
    },
    getComments: state => {
      console.log(state);
      return (restaurantID) => {
        const restaurant = state.restaurantList[restaurantID];
        return restaurant.ratings;
      }
    }
  },
  mutations: {
    setRestaurantList: (state, {
      list
    }) => {
      state.restaurantList = list.map(formatRestaurant);
    },
    saveSortScore: (state) => {
      state.sortValue = sortValue;
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
    },
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