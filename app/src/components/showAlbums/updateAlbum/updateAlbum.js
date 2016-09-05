import template from './updateAlbum.html';
import styles from './updateAlbum.html';

export default {
  template,
  bindings: {
    update: '<',
    collection: '<'
  },
  controller() {
    this.styles = styles;
    this.album = {};

    const reset = () => {
      this.album = {};
    };

    this.submit = () => {
      const albumId = this.collection._id;
      this.album._id = albumId;

      this.update(this.album);
      reset();
    };
  }
};
