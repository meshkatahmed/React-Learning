// import Emoji from "./components/composition/emoji";
// import Text from "./components/composition/text";
// import Bracket from "./components/composition/bracket";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

function App() {
  return (
    // <Emoji>
    //   {(addEmoji) => 
    //     <Bracket>
    //       {(addBracket) => <Text addEmoji={addEmoji} addBracket={addBracket}/>}
    //     </Bracket>} 
    // </Emoji>
    <div className="app">
      <ClickCounter/>
      <HoverCounter/>
    </div>
  );
}

export default App;
