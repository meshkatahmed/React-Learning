import { Component } from "react";
import ClickCounter from "./components/countersForRenderProps/ClickCounter";
import Section from "./components/Section";
import Counter from "./components/renderProps/Counter";
import themeContext from "./contexts/themeContext";

export default class App extends Component {
  state = {
    theme: 'dark',
  };
  switchTheme= () => {
    this.setState(({theme}) => {
      if (theme === 'dark') {
        return {
          theme: 'light',
        }
      } else {
        return {
          theme: 'dark',
        }
      }
    })
  }
  render() {
    const {theme} = this.state;
    return (
      <div className="app">
        <Counter>
          {(count,incrementCount) => (<ClickCounter 
                                       count={count} 
                                       incrementCount={incrementCount}
                                     />)}
        </Counter>
        <themeContext.Provider 
          value={{theme,switchTheme:this.switchTheme}}
        >
          <Section />
        </themeContext.Provider>
      </div>
    );
  }
}
