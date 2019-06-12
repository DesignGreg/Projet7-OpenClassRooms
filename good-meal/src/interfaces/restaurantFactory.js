export default {
  getRestaurantList
};

const axios = require('axios');

// Appel Axios à la liste restaurantList.json, et de GooglePlaces, réutilisée dans le Store.
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

/* Deux fonctions helpers de getRestaurantList utilisée dans le Store */

// Pour obtenir les places en utilisant l'API
function getPlacesPromise (service, location) {
  return new Promise((resolve) => {
    return service.nearbySearch({
      location,
      radius: 2000,
      type: ['restaurant']
    }, function (result, status) {
      return resolve({ result, status })
    });
  })
}

// Pour formater les données de GooglePlaces de la même manière que les restaurants de la liste JSON
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