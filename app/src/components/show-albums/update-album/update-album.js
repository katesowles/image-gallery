import template from './update-album.html';
import styles from './update-album.html';

export default {
  template,
  bindings: {
    update: '<',
    collection: '<',
    album: '<',
  },
  controller() {
    this.styles = styles;
    this.updatedAlbum = {
      title: '',
    };

    const reset = () => {
      this.updatedAlbum = {};
    };

    this.submit = (albumId) => {
      console.log('albumId', albumId);

      // const albumId = this.collection._id;
      this.album._id = albumId;

      this.update(this.album);
      reset();
    };
  }
};
