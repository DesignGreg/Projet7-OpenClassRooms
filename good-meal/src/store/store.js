import Vue from 'vue';
import Vuex from 'vuex';

import restaurantFactory from '../interfaces/restaurantFactory';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    restaurantList: [],
    visibleRestaurant: [],
    sortValue: [],
    boundsValue: {}
  },
  getters: {
    getRestaurantById: (state) => {
      return (id) => {
        const restaurantIndex = getRestaurantIndex(state.restaurantList, id);
        console.log({id, restaurantIndex});
        // return state.restaurantList[id-1];
        return state.restaurantList[restaurantIndex];
      };
    },
    getRestaurantList: state => {
      return state.visibleRestaurant;
    },
    getSortValue: (state) => {
      return state.sortValue;
    },
    getBoundsValue: (state) => {
      return state.boundsValue;
    },
    getRestaurantAvgRating: (state) => {
      return (id) => {
        const restaurantIndex = getRestaurantIndex(state.restaurantList, id);
        // console.log(restaurantIndex)
        const { ratings } = state.restaurantList[restaurantIndex];

        const avgRating = ratings.reduce((acc, rating) => {
          return acc + (rating.stars / ratings.length);
        }, 0);
        return Math.round(avgRating);
      };
    }
  },
  mutations: {
    setRestaurantList: (state, { list }) => {
      state.restaurantList = list;
    },
    selectVisibleRestaurant(state) {
      const bounds = state.boundsValue;
      const range = state.sortValue;
      state.visibleRestaurant = state.restaurantList.filter((restaurant) => {
        let shouldBeVisible = true;
        let isInMap = true;
        let isInRange = true;
        
       if (bounds) {
         isInMap = restaurant.long >= bounds.ga.j && restaurant.long <= bounds.ga.l && restaurant.lat >= bounds.na.j && restaurant.lat <= bounds.na.l;
         shouldBeVisible = shouldBeVisible && isInMap;
       }
        
        if (range && range.length === 2) {
          // const avgRating = this.getRestaurantAvgRating();
          // console.log(avgRating);
          isInRange = restaurant.ratings[0].stars >= range[0] && restaurant.ratings[1].stars <= range[1];
          shouldBeVisible = shouldBeVisible && isInRange;
        }
        
       console.log(restaurant.restaurantName, {
         shouldBeVisible, isInMap, isInRange, avg: restaurant.ratings[0]
       });
        return shouldBeVisible;
      });
    },
    setBoundsValue: (state, bounds) => {
      state.boundsValue = bounds;
    },
    setSortValue: (state, range) => {
      state.sortValue = range;
    },
    addRestaurant: (state, { newRestaurant }) => {
      console.log('store', { ...newRestaurant })

      const restaurantToAdd = { ...newRestaurant, ratings: [], ID: getLastId()}

      state.restaurantList.push(restaurantToAdd)
      state.visibleRestaurant.push(restaurantToAdd)

      function getLastId () {
        const lastId = state.restaurantList.reduce((acc, restaurant) => {
          if (acc < restaurant.ID) {
            return restaurant.ID
          }
          return acc
        }, 0)
  
        return lastId + 1
      }
    },
    addComment: (state, { restaurantId, comment }) => {
      const restaurantIndex = getRestaurantIndex(state.restaurantList, restaurantId);

      state.restaurantList[restaurantIndex].ratings.push({ ...comment })
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

function getRestaurantIndex (restaurantList, id) { 
  return restaurantList
    .findIndex((restaurant) => restaurant.ID === parseInt(id))
}