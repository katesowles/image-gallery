import template from './newItem.html';
import styles from './newItem.scss';

export default {
  template,
  controllerAs: 'new-item',
  bindings: {
    collection: '='
  },
  controller() {
    console.log('new', this.collection);
    this.styles = styles;

    this.reset = () => {
      this.title = '';
      this.caption = '';
      this.link = '';
    };

    this.addNew = () => {
      let image = {
        title: this.title,
        caption: this.caption,
        link: this.link
      };
      this.collection.push(image);
      this.reset();
    };
  }
};
