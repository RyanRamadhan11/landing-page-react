import { useState } from 'react'
import Home from './pages/Home'  // Sesuaikan path sesuai dengan struktur proyek Anda
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const hello = <h1>Hello</h1>
  return (
    <>
        {/* <h1>Hello {hello}</h1> */}
        {/* <Test/> */}
        <Home/>
      
    </>
  )
}

export default App
