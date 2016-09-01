import styles from './list-albums.scss';
import template from './list-albums.html';

export default {
  template,
  controller
};

controller.$inject = ['albumService'];

function controller(albumService){
  this.styles = styles;
  albumService.getAll()
    .then(albums=>this.albums=albums)
    .catch(err=>console.log(err));
}
