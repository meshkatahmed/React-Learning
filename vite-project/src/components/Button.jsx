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
    const {change,locale,show,enable} = this.props;
    if(!enable) return null;
    return (
      <div>
        <button type='submit' onClick={()=>change(locale)}>
          {locale==='en-US' ? 'ঘড়ি পরিবর্তন করুন': 'Change Clock'}
        </button>
        {show && <p>Hello</p>}
      </div>
    );
  };
};

export default Button;