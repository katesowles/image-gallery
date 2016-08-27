import template from './thumb.html';
import styles from './thumb.scss';

export default {
  template,
  controllerAs: 'thumb',
  bindings: {
    collection: '='
  },
  controller() {
    console.log('thumb coll', this.collection);
    this.styles = styles;
  }
};
