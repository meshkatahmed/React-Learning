import { Component } from 'react';

class Clock extends Component {
  state = {date: new Date()};
  // constructor(props) {
  //   super(props);
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
  render() {
    return (
      <h1 className='heading'>
        <span className='text'>
          {this.state.date.toLocaleTimeString(this.props.locale)}
        </span>
      </h1>
    ); 
  }
}

export default Clock;