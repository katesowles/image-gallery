import template from './album.html';
import styles from './album.scss';

export default{
  template,
  controller,
  bindings: {
    albumId: '<',
    display: '<'
  }
};

controller.$inject = ['imageService', '$state'];

function controller(imageService, $state){
  this.styles = styles;

  this.uiOnParamsChanged = (params)=>{
    //TODO find a way to check for invaliad params
    //i.e. not thumbnail, gallery, or list
    this.display = params.display;
  };

  this.changeDisplay = (selectedDisplay)=>{
    //TODO refactor this, so it takes a dynamic value
    //vs a hardcoded string passed in as the selectedDisplay
    this.display = selectedDisplay;
    $state.go($state.current.name, {display: this.display});
  };

  imageService.getAlbumContent(this.albumId)
      .then(data=>{
        this.images = data;
        if(data.length){
          this.title = data[0].album.title;
        } else {
          this.title = 'Album with no pictures in it';
        }
      })
      .catch(err=>console.log(err));

  this.add = imageToAdd=>{
    imageService.add(imageToAdd)
      .then(addedImage=>this.images.push(addedImage))
      .catch(err=>console.log(err));
  };
}
