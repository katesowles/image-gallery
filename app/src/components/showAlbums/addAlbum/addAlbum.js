import template from './addAlbum.html';
import styles from './addAlbum.js';

export default {
  template,
  bindings: {
    add: '<'
  },
  controller() {
    this.styles = styles;
    this.album = {};

    const reset = () => {
      this.title = {};
    };

    this.submit = () => {
      this.add(this.album);
      reset();
    };
  }
};
