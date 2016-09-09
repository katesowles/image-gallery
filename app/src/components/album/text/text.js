import template from './text.html';
import styles from './text.scss';

export default {
  template,
  bindings: {
    images: '=',
    remove: '<',
    update: '<'
  },
  controller() {
    this.styles = styles;
  }
};
