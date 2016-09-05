import template from './thumb.html';
import styles from './thumb.scss';

export default {
  template,
  bindings: {
    image: '<'
    // collection: '='
  },
  controller() {
    this.styles = styles;
  }
};
