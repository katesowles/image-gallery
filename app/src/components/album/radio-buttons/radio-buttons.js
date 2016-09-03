import template from './radio-buttons.html';
import styles from './radio-buttons.scss';

export default{
  template,
  controller,
  bindings: {
    display: '='
  }
};

function controller(){
  this.styles = styles;
  this.viewChange = ()=>{
    console.log('changed');
  };
}
