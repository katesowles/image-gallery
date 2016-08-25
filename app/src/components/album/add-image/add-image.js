import template from './add-image.html';
import styles from './add-image.scss';

export default{
  template,
  controller(){
    this.styles = styles;
    this.submit = ()=>{
      console.log('submitted');
    };
  }
};
