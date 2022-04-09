const remoteURL = "http://localhost:8088"

export const getLocationById = (locationId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/location/${locationId}?_expand=name&_expand=address`)
  .then(res => res.json())
}

export const getAllLocations = () => {
  return fetch(`${remoteURL}/locations`)
  .then(res => res.json())
}