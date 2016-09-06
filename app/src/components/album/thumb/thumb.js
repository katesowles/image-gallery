import template from './thumb.html';
import styles from './thumb.scss';

export default {
  template,
  bindings: {
    info: '<'
    // collection: '='
  },
  controller() {
    this.styles = styles;
  }
};
