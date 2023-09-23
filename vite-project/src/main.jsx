import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ComplexCounter from './components/Hooks/useReducer/complexCounter';
import SeperateCounters from './components/Hooks/useReducer/SeperateCounters';
// import Todo from '../src/components/Todo'
// import reportWebVitals from './reportWebVitals'



let root = ReactDOM.createRoot(document.getElementById('root'));

root.render (
      <React.StrictMode>
        <App />
      </React.StrictMode>
);

// Custom useState config
// let states = [];
// let stateIndex = -1;

// export default function useState(defaultValue) {
//   let index = ++stateIndex;
//   if (states[index]) return states[index];
//   const setValue = (newValue) => {
//     states[index][0] = newValue;
//     renderWithMeshkat();
//   }
//   const returnArray = [defaultValue,setValue];
//   states[index] = returnArray;
//   return returnArray;
// }
// const renderWithMeshkat = () => {
//   // stateIndex = -1;
//   root.render (
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// }
// renderWithMeshkat();




  


