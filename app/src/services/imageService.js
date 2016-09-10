imageService.$inject = ['$http', 'apiUrl'];

export default function imageService ($http, apiUrl) {
  return {

    getAlbumContent(albumId) {
      return $http.get(`${apiUrl}/albums/${albumId}/images`)
        .then(response => {
          return response.data;
        })
        .catch(err => console.error('something went wrong: ', err));
    },

    add(image) {
      return $http.post(`${apiUrl}/albums/${image.album}/images`, image)
        .then (added => added.data)
        .catch(err => console.error('something went wrong:', err));
    },

    remove(imageId) {
      return $http.delete(`${apiUrl}/images/${imageId}`)
        .then(removed => removed.data)
        .catch(err => console.error('something went wrong: ', err));
    },

    update(image, imageId) {
      return $http.put(`${apiUrl}/images/${imageId}`, image)
        .then(updated => updated.data)
        .catch(err => console.error('something went wrong: ', err));
    }
  };
}
