import template from './updateImage.html';
import styles from './updateImage.scss';

export default {
  template,
  bindings: {
    update: '<',
    info: '<'
  },
  controller() {
    this.styles = styles;

    const reset = () => {
      this.image = {};
    };

    reset();

    this.submit = () => {
      const imageId = this.info._id;
      this.image._id = imageId;

      this.update(this.image);
      reset();
    };
  }
};
