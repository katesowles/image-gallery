import template from './add-image-form.html';
import styles from './add-image-form.scss';

export default{
  template,
  bindings: {
    add: '<'
  },
  controller(){
    this.styles = styles;

    const resetImage = ()=>{
      this.image = {};
    };

    resetImage();

    this.submit = ()=>{
      this.add(this.image);
      resetImage();
    };
  }
};
