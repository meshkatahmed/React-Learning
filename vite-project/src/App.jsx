// import Emoji from "./components/composition/emoji";
// import Text from "./components/composition/text";
// import Bracket from "./components/composition/bracket";
import ClickCounter from "./components/countersForRenderProps/ClickCounter";
import HoverCounter from "./components/countersForRenderProps/HoverCounter";
import Counter from "./components/renderProps/Counter";

function App() {
  return (
    // <Emoji>
    //   {(addEmoji) => 
    //     <Bracket>
    //       {(addBracket) => <Text addEmoji={addEmoji} addBracket={addBracket}/>}
    //     </Bracket>} 
    // </Emoji>
    <div className="app">
      <Counter>
        {(count,incrementCount) => (<ClickCounter 
                                     count={count} 
                                     incrementCount={incrementCount}
                                   />)}
      </Counter>
      <Counter>
        {(count,incrementCount) => (<HoverCounter 
                                    count={count} 
                                    incrementCount={incrementCount}
                                   />)}
      </Counter>
    </div>
  );
}

export default App;
