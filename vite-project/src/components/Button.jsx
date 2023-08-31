import {Component} from "react";

class Button extends Component {
  shouldComponentUpdate(nextProps) {
    const {change:currentChange,locale:currentLocale} = this.props;
    const {change:nextChange,locale:nextLocale} = nextProps;
    if (currentChange===nextChange && currentLocale===nextLocale) {
      return false;
    } 
    return true;
  }
  render() {
    console.log('Button componennt rendered');
    const {change,locale} = this.props;
    return (
      <button type='submit' onClick={()=>change(locale)}>
        Click here
      </button>
    );
  };
};

export default Button;