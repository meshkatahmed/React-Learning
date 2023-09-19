import { Component } from "react";
// import ClickCounter from "./components/countersForRenderProps/ClickCounter";
// import Section from "./components/Section";
// import Counter from "./components/renderProps/Counter";
// import themeContext from "./contexts/themeContext";
// import Todo from "./components/Todo";
// import UsingPrevStateForuseState from "./components/UsingPrevStateForUseState";
import MyFunctionComponent from "./components/Hooks/UseEffect/MyFunctionComponent";
import MyClassComponent from "./components/Hooks/UseEffect/MyClassComponent";

export default class App extends Component {
  // state = {
  //   tryok: 1,
  //   value: {
  //     theme: 'dark',
  //   },
  // };
  // switchTheme = () => {
  //   this.setState(({value}) => {
  //     if (value.theme === 'dark') {
  //       return {
  //         value: {
  //           theme: 'light',
  //         },
  //       }
  //     } else {
  //       return {
  //         value: {
  //           theme: 'dark',
  //         },
  //       }
  //     }
  //   })
  // };
  
  // changeTry = () => {
  //   this.setState({
  //     tryok: this.state.tryok + 1,
  //   })
  // }
  state = {
    show: true,
  }
  render() {
    const {show} = this.state;
    return (
      <div className="app">
        {/* <Counter>
          {(count,incrementCount) => (<ClickCounter 
                                       count={count} 
                                       incrementCount={incrementCount}
                                     />)}
        </Counter>
        <button type="button" onClick={this.changeTry}>Try</button>
        <themeContext.Provider 
          value={{...this.state.value,switchTheme:this.switchTheme}}
        >
          <Section />
        </themeContext.Provider> */}
        {/* <UsingPrevStateForuseState/> */}
        <div>We shall learn useEffect() today</div>
        {show && <MyFunctionComponent/>}
        <button onClick={()=>this.setState({show:!show})}>
          {show ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}
