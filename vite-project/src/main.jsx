// import React from 'react'
import { Component } from 'react';
import ReactDOM from 'react-dom/client'

const index = 0;
// const element = React.createElement('h1',null,'Hello World!');

class Clock extends Component { 
  render() {
    return (
      <h1 className='heading' tabIndex={index}>
        <span className='text'>{this.props.children}{new Date().toLocaleTimeString(this.props.locale)}</span>
        <img src="" alt="" />
      </h1>
    ); 
  }
}

// const ClockComponent = new Clock();

// function Clock({locale}) {
//   return (
//     <h1 className='heading' tabIndex={index}>
//       <span className='text'>{new Date().toLocaleTimeString(locale)}</span>
//       <img src="" alt="" />
//     </h1>
//   );
// }

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock locale='bn-BD'>test</Clock>);
// root.render(new Clock().print());

// setInterval(() => {
//   const element = (
//     <h1 className='heading' tabIndex={index}>
//       <span className='text'>{new Date().toLocaleTimeString()}</span>
//       <img src="" alt="" />
//     </h1>
//   );
//   root.render(element);
// },1000);

// console.log(element);
// import App from './App.jsx'
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,

/* Object representation of element
element = {
  type: 'h1',
  props: {
    className: 'heading',
    tabIndex: 0,
    children: {
      type: 'span',
      props: {
        className: 'text',
        children: {
          children: 'time',
        }
      }
    },
    children: {
      type: 'img',
      props: {
        src: '',
        alt: '',
      }
    }
  }
} */

