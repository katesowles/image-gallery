import template from './add-album.html';
import styles from './add-album.js';

export default {
  template,
  bindings: {
    add: '<'
  },
  controller() {
    this.styles = styles;
    this.album = {};

    const reset = () => {
      this.album = {};
    };

    this.submit = () => {
      if(this.album.title !== '') {
        console.log('this', this);
        this.add(this.album);
        reset();
      }
      else {
        console.log('sorry, that isn\'t going to work, please enter a title');
      }
    };
  }
};
