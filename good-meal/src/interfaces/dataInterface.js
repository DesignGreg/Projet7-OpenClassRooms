export default {
  getRestaurantData
};

const axios = require('axios');

function getRestaurantData(restaurantID) {
  axios.get('http://localhost:8080/restaurantList.json').then((response) => {
    this.restaurantData = response.data[restaurantID];
  }, (err) => {
    console.log(err);
    return false;
  });
}