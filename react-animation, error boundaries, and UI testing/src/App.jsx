import { useState } from 'react'
import { CSSTransition, Transition } from 'react-transition-group'
import './App.css'

function App() {
  const [show, setShow] = useState(true);
  const animateTime = {
    enter: 1000,
    exit: 500,
  }
  return (
    <div>
      <button onClick={()=>setShow(!show)}>Toggle</button>
      <CSSTransition 
        in={show} 
        timeout={animateTime} 
        mountOnEnter 
        unmountOnExit
        // onEnter={()=>console.log("onEnter")}
        // onEntering={()=>console.log("onEntering")}
        // onEntered={()=>console.log("onEntered")}
        // onExit={()=>console.log("onExit")}
        // onExiting={()=>console.log("onExiting")}
        // onExited={()=>console.log("onExited")}
        className="myClass"
      >
          {
            mode => 
                    ( 
                      <div style={{
                              background: 'black',
                              color: 'white',
                              borderRadius: 4,
                              // transition: 'opacity 2s ease-out',
                              // opacity: mode==='exiting' || mode==='entering' ? 0 : 1,
                            }}>
                        <p>React animation</p>
                      </div>
                    )
          }
      </CSSTransition>
      <p>Outside transition</p>
    </div>
  )
}

export default App
