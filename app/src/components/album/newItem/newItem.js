import template from './newItem.html';
import styles from './newItem.scss';

export default {
  template,
  bindings: {
    add: '<',
    id: '<'
  },
  controller() {
    this.styles = styles;
    this.image = {};

    this.reset = () => {
      this.image = {};
    };

    this.submit = () => {
      this.add(this.image);
      this.reset();
    };
  }
};
