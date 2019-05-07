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
    newComments: [],
    newRestaurants: []
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
    // getComments: state => {
    //   console.log(state);
    //   return (restaurantID) => {
    //     const restaurant = state.restaurantList[restaurantID];
    //     return restaurant.ratings;
    //   }
    // }
  },
  mutations: {
    setRestaurantList: (state, {
      list
    }) => {
      state.restaurantList = list.map(formatRestaurant);
    },
    selectVisibleRestaurant (state, bounds) {
      state.visibleRestaurant = state.restaurantList.filter((restaurant) => {
        return restaurant.long >= bounds.ia.j && restaurant.long <= bounds.ia.l && restaurant.lat >= bounds.na.j && restaurant.lat <= bounds.na.l 
      })
    }
    // addComment: (state, {
      
    // }) => {
    //   state.newComments =
    // },
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
    UploadComment(context) {
      context.commit('addComment', {
        newComments: newComments
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