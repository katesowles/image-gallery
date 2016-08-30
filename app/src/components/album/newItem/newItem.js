import template from './newItem.html';
import styles from './newItem.scss';

export default {
  template,
  bindings: {
    // collection: '=',
    add: '<',
  },
  controller() {
    this.styles = styles;
    this.image = {};

    this.reset = () => {
      this.title = '';
      this.caption = '';
      this.link = '';
    };

    this.submit = () => {
      this.add(this.image);
      this.reset();
    };

    // this.addNew = () => {
    //   // image = {
    //   //   title: this.title,
    //   //   caption: this.caption,
    //   //   link: this.link
    //   // };
    //   this.add(this.image);
    //   this.reset();
    // };
  }
};
