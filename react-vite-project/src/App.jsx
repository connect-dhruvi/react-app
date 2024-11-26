
import TestComponent from './components/TestComponent';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello World!</h1>
      {/* <TestComponent/> */}
    </div>
  )
}

export default App
