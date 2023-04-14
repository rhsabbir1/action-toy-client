import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HEader from './components/Header/HEader'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HEader></HEader>
      <Outlet></Outlet>
    </div>
  )
}

export default App
