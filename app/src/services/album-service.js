albumService.$inject = ['$http', 'apiUrl'];

export default function albumService($http, apiUrl){
  return {
    getAll(){
      return $http.get(`${apiUrl}/albums`)
        .then(response=>response.data)
        .catch(err=>console.log(err));
    },
    add(album){
      return $http.post(`${apiUrl}/albums`, album)
        .then(response=>response.data)
        .catch(err=>console.log(err));
    }
  };
}
