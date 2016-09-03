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

controller.$inject = ['imageService'];

function controller(imageService){
  this.styles = styles;
  //this.view = 'list';

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
