imageService.$inject = ['$http', 'apiUrl'];

export default function imageService($http, apiUrl){
  return {
    getAll(){
      return $http.get(`${apiUrl}/images`)
        .then(response=>response.data)
        .catch(err=>console.log(err));
    },
    getAlbumContent(albumId){
      return $http.get(`${apiUrl}/albums/${albumId}/content`)
        .then(response=>response.data)
        .catch(err=>console.log(err));
    },
    add(image){
      return $http.post(`${apiUrl}/images`, image)
        .then(response=>response.data)
        .catch(err=>console.log(err));
    }
  };
}
