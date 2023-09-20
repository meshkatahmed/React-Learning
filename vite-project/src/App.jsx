// import { Component } from "react";
// import ClickCounter from "./components/countersForRenderProps/ClickCounter";
// import Section from "./components/Section";
// import Counter from "./components/renderProps/Counter";
// import themeContext from "./contexts/themeContext";
// import Todo from "./components/Todo";
// import UsingPrevStateForuseState from "./components/UsingPrevStateForUseState";
// import MyFunctionComponent from "./components/Hooks/UseEffect/MyFunctionComponent";
// import MyClassComponent from "./components/Hooks/UseEffect/MyClassComponent";

// export default class App extends Component {
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
//   state = {
//     show: true,
//   }
//   render() {
//     const {show} = this.state;
//     return (
//       <div className="app">
//         {/* <Counter>
//           {(count,incrementCount) => (<ClickCounter 
//                                        count={count} 
//                                        incrementCount={incrementCount}
//                                      />)}
//         </Counter>
//         <button type="button" onClick={this.changeTry}>Try</button>
//         <themeContext.Provider 
//           value={{...this.state.value,switchTheme:this.switchTheme}}
//         >
//           <Section />
//         </themeContext.Provider> */}
//         {/* <UsingPrevStateForuseState/> */}
//         <div>We shall learn useEffect() today</div>
//         {show && <MyFunctionComponent/>}
//         <button onClick={()=>this.setState({show:!show})}>
//           {show ? 'Hide' : 'Show'}
//         </button>
//       </div>
//     );
//   }
// }

import {useState,useCallback,useMemo} from 'react';
import Title from './components/Hooks/useCallbackWithMemo&useMemo/Title';
import ShowCount from './components/Hooks/useCallbackWithMemo&useMemo/ShowCount';
import Button from './components/Hooks/useCallbackWithMemo&useMemo/Button';

export default function App() {
  const [count1,setCount1] = useState(0);
  const [count2,setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1((prevCount)=>prevCount+1);
  },[]);
  const incrementByFive = useCallback(() => {
    setCount2((prevCount)=>prevCount+5);
  },[]);
  const isEvenOrOdd = useMemo(() => {
    let i = 0;
    while (i<1000000000) i += 1;
    return count1 % 2 === 0;
  },[count1]);
  return (
    <div>
      <Title/>
      <ShowCount count={count1} title='Counter 1'/>
      <span>{isEvenOrOdd ? 'Even' : 'Odd'}</span>
      <Button handleClick={incrementByOne}>Increment by one</Button>
      <hr/>
      <ShowCount count={count2} title='Counter 2'/>
      <Button handleClick={incrementByFive}>Increment by five</Button>
    </div>
  );
}