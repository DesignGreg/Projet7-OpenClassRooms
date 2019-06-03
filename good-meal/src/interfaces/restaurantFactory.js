export default {
  getRestaurantList
};

const axios = require('axios');

// Appel Axios à la liste restaurantList.json, réutilisée dans le Store.
function getRestaurantList() {
  return axios
    .get('http://localhost:8080/restaurantList.json')
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}
