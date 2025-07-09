import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const url:string = "https//:youtube.com";


  return (
    <>
    

      <div className="card">
          <h1>Ola mundo em react</h1>
          <img src={url} alt="imagem" />
      </div>
    </>
  )
}

export default App
