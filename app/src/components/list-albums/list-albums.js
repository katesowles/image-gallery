import styles from './list-albums.scss';
import template from './list-albums.html';

export default {
  template,
  controller(){
    this.styles = styles;
    this.albums = [
      {
        title: 'album 1'
      },
      {
        title: 'album 2'
      },
      {
        title: 'album 3'
      }
    ];
  }
};
