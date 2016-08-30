imageService.$inject = ['$http'];

export default function imageService($http){
  return {
    getAll(){
      return $http.get('http://localhost:3000/api/images')
        .then(response=>response.data)
        .catch(err=>console.log(err));
    }
    //,
    // add(image){
    //
    // }
  };
}
