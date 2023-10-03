import { useState,Suspense } from 'react'
import Quote from './components/swr/Quote'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Suspense fallback={<h1>Loading data...</h1>}>
        <Quote/>
      </Suspense>
      
    </div>
  )
}

export default App
