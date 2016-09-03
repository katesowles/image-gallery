imageService.$inject = ['$http', 'apiUrl', '$cacheFactory'];

export default function imageService($http, apiUrl, $cacheFactory){
  const cache = $cacheFactory.get('$http');

  return {
    //TODO remove getAll if this isn't used
    // getAll(){
    //   return $http.get(`${apiUrl}/images`)
    //     .then(response=>response.data)
    //     .catch(err=>console.log(err));
    // },
    getAlbumContent(albumId){
      return $http.get(`${apiUrl}/albums/${albumId}/content`, {cache: true})
        .then(response=>response.data)
        .catch(err=>console.log(err));
    },
    add(image){
      const albumId = image.album;
      cache.remove(`${apiUrl}/albums/${albumId}/content`);

      return $http.post(`${apiUrl}/images`, image)
        .then(response=>response.data)
        .catch(err=>console.log(err));
    }
  };
}
