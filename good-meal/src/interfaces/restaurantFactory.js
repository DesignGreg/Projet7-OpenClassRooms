export default {
  getRestaurantList
};

const axios = require('axios');

// Appel Axios à la liste restaurantList.json, réutilisée dans le Store.
async function getRestaurantList(service, location) {
  try {
    const jsonPromise = axios.get('http://localhost:8080/restaurantList.json')
    const placesPromise = getPlacesPromise(service, location)

    const [ jsonResult, placesResult ] = await Promise.all([ jsonPromise, placesPromise ])

    const jsonRestaurantList = jsonResult.data
    const placesRestaurantList = placesResult.result.map(formatPlacesIntoJson)

    return [
      ...jsonRestaurantList,
      ...placesRestaurantList
    ]
  } catch (err) {
    console.log(err)
    return false
  }
}

function getPlacesPromise (service, location) {
  return new Promise((resolve) => {
    return service.nearbySearch({
      location,
      radius: 500,
      type: ['restaurant']
    }, function (result, status) {
      return resolve({ result, status })
    });
  })
}

function formatPlacesIntoJson (restaurant) {
  return {
    ...restaurant,
    restaurantName: restaurant.name,
    address: restaurant.vicinity,
    lat: restaurant.geometry.location.lat(),
    long: restaurant.geometry.location.lng(),
    description: ''
  }
}