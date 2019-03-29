import Vue from 'vue';
import Vuex from 'vuex';
const axios = require('axios');

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    data: [],
    averageRatings: null,
  },
  getters: {
    getRestaurantInfo: state => {
      const restaurantList = state.data;

      return restaurantList.map((restaurant) => {
        const sum = restaurant.ratings.reduce((acc, rating) => {
          return acc + rating.stars;
        }, 0);
        return {
          ...restaurant,
          averageRating: Math.round(sum / restaurant.ratings.length),
        }
      })
    },
    
  },
  mutations: {
    setData: (state, {info}) => {
      state.data = info;
    }
  },
  actions: {
    getData: async function (context) {
      setTimeout(() => {
        axios.get('http://localhost:8080/restaurantList.json').then((response) => {
          context.commit('setData', {
            info: response.data});
          return true;
        }, (err) => {
          console.log(err);
          return false;
        });
      }, 500)
    }
  }
});

//callJSON: state => {
//  axios
//    .get('http://localhost:8080/restaurantList.json')
//    .then(response => (state.info = response.data))
//    .catch(function (error) {
//      if (error.response) {
//        console.log(error.response.data);
//        console.log(error.response.status);
//        console.log(error.response.headers);
//      } else if (error.request) {
//        console.log(error.request);
//      } else {
//        console.log('Error', error.message);
//      }
//    })
//    .then(function () {
//
//    });
//},