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
        console.log({
          id,
          restaurantIndex
        });
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
        const {
          ratings
        } = state.restaurantList[restaurantIndex];

        
        return computeAvgRatings(ratings)
      };
    }
  },
  mutations: {
    setRestaurantList: (state, {
      list
    }) => {
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
          isInRange = restaurant.avgRating >= range[0] && restaurant.avgRating <= range[1];
          shouldBeVisible = shouldBeVisible && isInRange;
        }

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

      const ratings = newRestaurant.ratings || []

      const restaurantToAdd = {
        ...newRestaurant,
        ratings,
        avgRating: computeAvgRatings(ratings),
        ID: getLastId()
      }

      state.restaurantList.push(restaurantToAdd)
      state.visibleRestaurant.push(restaurantToAdd)

      function getLastId() {
        const lastId = state.restaurantList.reduce((acc, restaurant) => {
          if (acc < restaurant.ID) {
            return restaurant.ID
          }
          return acc
        }, 0)

        return lastId + 1
      }
    },
    addComment: (state, {
      restaurantId,
      comment
    }) => {
      const restaurantIndex = getRestaurantIndex(state.restaurantList, restaurantId);

      state.restaurantList[restaurantIndex].ratings.push({
        ...comment
      })
    }
  },
  actions: {
    getData: async function (context, { service, location }) {
      const restaurantList = await restaurantFactory.getRestaurantList(service, location)

      restaurantList.forEach((newRestaurant) => context.commit('addRestaurant', { newRestaurant }))
    },
  }
});

function getRestaurantIndex(restaurantList, id) {
  return restaurantList
    .findIndex((restaurant) => restaurant.ID === parseInt(id))
}

function computeAvgRatings (ratings) {
  const avgRating = ratings.reduce((acc, rating) => {
    return acc + (rating.stars / ratings.length);
  }, 0);
  return Math.round(avgRating);
}