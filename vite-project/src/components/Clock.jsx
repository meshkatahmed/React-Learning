import { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({date: new Date()});
        });
    }
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