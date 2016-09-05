import template from './update-image-form.html';
import styles from './update-image-form.scss';

export default{
  template,
  bindings: {
    update: '<',
    info: '<'
  },
  controller(){
    this.styles = styles;

    const resetImage = ()=>{
      this.image = {};
    };

    resetImage();

    this.submit = ()=>{
      console.log(this.info);
      //const originalTitle = this.info.title;
      //const originalDescription = this.info.description;
      //const originalLink = this.info.link;

      //console.log(originalTitle);
      //console.log(originalDescription);
      //console.log(originalLink);

      const id = this.info._id;
      this.image._id = id;
      console.log(this.image);
      this.update(this.image);
      resetImage();
      //TODO see about refactoring this later
      // if('title' && 'description' && 'link' in this.image){
      //   if(this.image.title && this.image.description && this.image.link !== ''){
      //     this.isInvalid = false;
      //     this.image.album = this.id;
      //     this.add(this.image);
      //     resetImage();
      //   } else {
      //     this.isInvalid = true;
      //   }
      // } else {
      //   this.isInvalid = true;
      // }
    };
  }
};
