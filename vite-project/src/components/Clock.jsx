import { Component } from 'react';
import Button from './Button';

class Clock extends Component {
  state = { date: new Date(), locale: 'bn-BD' };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     date: new Date(), 
  //     locale: 'bn-BD',
  //   };
  //    this.handleClick = this.handleClick.bind(this);
  // }
  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(),1000);
  };
  tick() {
    this.setState({date: new Date()}); 
  };
  componentWillUnmount() {
    clearInterval(this.clockTimer);
  };
  handleClick = (locale) => {
    this.setState({locale:locale});
  };
  render() {
    const {date,locale} = this.state;
    // let btn;
    // if (locale==='bn-BD') {
    //   btn = <Button change={this.handleClick} locale='en-US'/>
    // } else {
    //   btn = <Button change={this.handleClick} locale='bn-BD'/>
    // }
    return (
      <div>
        <h1 className='heading'>
          <span className='text'>
            {this.state.date.toLocaleTimeString(locale)}
          </span>
        </h1>
        {locale==='bn-BD' ?
          <Button change={this.handleClick} locale='en-US' show={false} enable/> :
          <Button change={this.handleClick} locale='bn-BD' show enable={false}/>} 
      </div>
    ); 
  }
}

export default Clock;