import { useState } from 'react'
import Quote from './components/axios/Quote'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Quote/>
    </div>
  )
}

export default App
