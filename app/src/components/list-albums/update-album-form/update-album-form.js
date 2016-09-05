import template from './update-album-form.html';
import styles from './update-album-form.scss';

export default{
  template,
  bindings: {
    update: '<',
    info: '<'
  },
  controller(){
    this.styles = styles;

    this.submit = ()=>{
      //TODO see about refactoring this later
      //add checks to make sure the updated title !== title
      if(this.album){
        const id = this.info._id;
        this.album._id = id;
        
        if(this.album.title !== ''){
          this.isInvalid = false;
          this.update(this.album);
        } else {
          this.isInvalid = true;
        }
      } else {
        this.isInvalid = true;
      }
    };
  }
};
