import styles from './list-albums.scss';
import template from './list-albums.html';

export default {
  template,
  controller
};

controller.$inject = ['albumService'];

function controller(albumService){
  this.styles = styles;
  // this.albums = [
  //   {
  //     title: 'album 1'
  //   },
  //   {
  //     title: 'album 2'
  //   },
  //   {
  //     title: 'album 3'
  //   }
  // ];
  albumService.getAll()
    .then(albums=>this.albums=albums)
    .catch(err=>console.log(err));
}
