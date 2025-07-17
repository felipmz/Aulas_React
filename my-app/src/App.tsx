import './App.css'

import Coisa from './componentes/Coisa'
import PropsTeste from './componentes/PropsTeste'

function App() {

  return (
    <>
      <div className="card">
          <h1>Ola mundo em react</h1>
          <Coisa/>
          <PropsTeste nome={"felipe"} idade={12}/>
      </div>
    </>
  )
}

export default App
