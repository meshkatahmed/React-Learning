import { useState,useEffect,Suspense } from 'react'
import Quote from './components/react-query/Quote'
import {QueryClientProvider,QueryClient} from 'react-query'
import Quote2 from './components/react-query/Quote2'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  // const [quote,setQuote] = useState(null);
  const client = new QueryClient({
    defaultOptions: {
      queries: {suspense:true},
    }
  });

  return (
    <div>
      <QueryClientProvider client={client}>
        <Suspense fallback={<h1>Loading data...</h1>}>
          <Quote />
          <Quote2 />
        </Suspense>
      </QueryClientProvider>
    </div>
  );
    
  
}

export default App
