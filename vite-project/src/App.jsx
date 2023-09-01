// import Clock from './components/Clock';
import ClockList from "./components/ClockList";

function App() {
  const qunatities = [1,2,3];
  return (
    <div>
      <ClockList quantity={qunatities}/>
    </div>
  );
}

export default App;
