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
    this.display = params.display || 'list';
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
          //TODO: Find a more elegant way to pass the album title
          //when the album does not have images in it
          this.title = '';
        }
      })
      .catch(err=>console.log(err));

  this.add = imageToAdd=>{
    imageService.add(imageToAdd)
      .then(addedImage=>this.images.push(addedImage))
      .catch(err=>console.log(err));
  };

  this.remove = imageToDelete=>{
    imageService.remove(imageToDelete)
      .then(deleted=>{
        const index = this.images.findIndex(image=>image._id === deleted._id);
        if(index !== -1){
          this.images.splice(index, 1);
        }
      })
      .catch(err=>console.log(err));
  };
}
