import axios from 'axios'

const api = axios.create({
  baseURL: '//launchlibrary.net/1.2',
  timeout: 5000
})

function serializeRocket(rocket) {
  return {
    id: rocket.id,
    name: rocket.name,
    family: rocket.family,
    imageUrl: rocket.imageURL,
  }
}

function serializeLaunch(launch) {
  return {
    id: launch.id,
    name: launch.name,
    date: launch.net,
    videoUrl: launch.vidURL || launch.vidURLs[0],
    location: launch.location.name,
    rocket: serializeRocket(launch.rocket)
  }
}

export default {
  findNext(max = 30) {
    return api.get(`/launch/next/${max}`).then(response => {
      return response.data.launches
        .map(serializeLaunch)
    })
  },

  find(id) {
    return api.get(`/launch/${id}`).then(response => {
      return serializeLaunch(response.data.launches[0]);
    })
  }
}
