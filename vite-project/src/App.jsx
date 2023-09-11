import Emoji from "./components/composition/emoji";
import Text from "./components/composition/text";
import Bracket from "./components/composition/bracket";

function App() {
  return (
    <Emoji>
      {(addEmoji) => 
        <Bracket>
          {(addBracket) => <Text addEmoji={addEmoji} addBracket={addBracket}/>}
        </Bracket>} 
    </Emoji>
  );
}

export default App;
