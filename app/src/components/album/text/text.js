import template from './text.html';
import styles from './text.scss';

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
