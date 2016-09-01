import template from './album.html';
import styles from './album.scss';

export default{
  template,
  controller
};

controller.$inject = ['imageService'];

function controller(imageService){
  this.styles = styles;
  this.view = 'list';

  //TODO refactor so it gets all images with a specific album id
  imageService.getAll()
    .then(images=>this.images=images)
    .catch(err=>console.log(err));
    
  //TODO refactor so it adds the image to a specific album
  this.add = imageToAdd=>{
    imageService.add(imageToAdd)
      .then(addedImage=>this.images.push(addedImage))
      .catch(err=>console.log(err));
  };
}
