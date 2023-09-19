import { Component } from "react";

export default class MyClassComponent extends Component {
    state = {
        count: 0,
        date: new Date(),
    }
    addClick = () => {
        this.setState({count:this.state.count+1});
    }
    tick = () => {
        console.log('Click is ticking');
        this.setState({date: new Date()});
    }
    componentDidMount() {
        const {count} = this.state;
        document.title = `Clicked ${count} times`;
        this.interval = setInterval(this.tick,1000);
    }
    componentDidUpdate() {
        const {count} = this.state;
        document.title = `Clicked ${count} times`;
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        const {count,date} = this.state;
        return (
            <div>
                <p>{count}</p>
                <p>Time: {date.toLocaleTimeString()}</p>
                <p>
                    <button type="button" onClick={this.addClick}>Click</button>
                </p>
            </div>
        );
    }
}