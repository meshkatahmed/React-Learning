import { Component } from 'react';
import Button from './Button';

class Clock extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(), 
      locale: 'bn-BD',
    };
    // this.handleClick = this.handleClick.bind(this);
  }
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
    console.log('Clock component rendered');
    const {date,locale} = this.state;
    return (
      <div>
        <h1 className='heading'>
          <span className='text'>
            {this.state.date.toLocaleTimeString(locale)}
          </span>
        </h1>
        <Button change={this.handleClick} locale='en-US'/>
      </div>
    ); 
  }
}

export default Clock;