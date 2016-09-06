albumService.$inject = ['$http', 'apiUrl'];

export default function albumService ($http, apiUrl) {

  return {

    getAll() {
      return $http.get(`${apiUrl}/albums`)
        .then(response => response.data)
        .catch(err => console.error('something went wrong when calling getAll() on the albums: ', err));
    },

    add(album) {
      return $http.post(`${apiUrl}/albums`, album)
        .then(added => added.data)
        .catch(err => console.error('something went wrong when calling add() on an album: ', err));
    },

    remove(album) {
      const albumId = album._id;
      return $http.delete(`${apiUrl}/albums/${albumId}`)
        .then(removed => removed.data)
        .catch(err => console.error('something went wrong when calling remove() on an album: ', err));
    },

    update(album) {
      const albumId = album._id;
      return $http.put(`${apiUrl}/albums/${albumId}`, album)
        .then(updated => updated.data)
        .catch(err => console.error('something went wrong when calling update() on an album: ', err));
    }
  };
}
