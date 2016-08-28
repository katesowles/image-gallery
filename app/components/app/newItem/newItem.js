import template from './newItem.html';
import styles from './newItem.scss';

export default {
  template,
  controllerAs: 'newItem',
  bindings: {
    collection: '=',
  },
  controller() {
    console.log('this', this);
    this.styles = styles;
    // let collection = this.collection;

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
      // console.log('collection before push', this.collection);
      this.collection.push(image);
      // console.log('collection after push', this.collection);
      this.reset();
    };
    // this.addNew = this.addNew.bind(this);
  }
};
