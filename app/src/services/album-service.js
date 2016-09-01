imageService.$inject = ['$http', 'apiUrl'];

export default function imageService($http, apiUrl){
  return {
    getAll(){
      return $http.get(`${apiUrl}/albums`)
        .then(response=>response.data)
        .catch(err=>console.log(err));
    }
  };
}
