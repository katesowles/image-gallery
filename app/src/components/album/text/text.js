import template from './text.html';
import styles from './text.scss';

export default {
  template,
  bindings: {
    info: '<',
    remove: '<',
    update: '<'
  },
  controller() {
    this.styles = styles;
  }
};
