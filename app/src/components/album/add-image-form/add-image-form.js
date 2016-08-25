import template from './add-image-form.html';
import styles from './add-image-form.scss';

export default{
  template,
  controller(){
    this.styles = styles;
    this.submit = ()=>{
      console.log('submitted');
    };
  }
};
