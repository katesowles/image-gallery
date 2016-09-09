import template from './updateImage.html';
import styles from './updateImage.scss';

export default {
  template,
  bindings: {
    update: '<',
    image: '<'
  },
  controller() {
    this.styles = styles;

    this.submit = () => {
      this.update(this.image);
    };
  }
};
