import template from './picker.html';
import styles from './picker.scss';

export default {
  template,
  controllerAs: 'picker',
  bindings: {
    collection: '=',
  },
  controller() {
    console.log('picker', this.collection);
    this.styles = styles;
  }
};
