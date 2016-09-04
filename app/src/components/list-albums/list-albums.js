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

  this.add = albumToAdd=>{
    albumService.add(albumToAdd)
      .then(addedAlbum=>this.albums.push(addedAlbum))
      .catch(err=>console.log(err));
  };

  this.remove = album=>{
    console.log('remove func fired ', album);
  };
}
