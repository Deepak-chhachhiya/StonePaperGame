import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Interface from './Interface'
import Game from './Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Interface />
      <Game />
       
    </>
  )
}

export default App
