import { Component } from "react"

const withCounter = (OriginalComponent) => {
    class NewComponent extends Component {
        state = {count:0};
        incrementCount = () => {
        // this.setState({count:this.state.count+1});
        // In case of returning an object we must have to wrap the return
        // statement with parantheses
            this.setState(() => ({count:this.state.count+1}));
        }
        render() {
            const {count} = this.state;
            return <OriginalComponent
                        count={count} 
                        incrementCount={this.incrementCount}
                    />;
        }
    }
    return NewComponent;
}

export default withCounter;