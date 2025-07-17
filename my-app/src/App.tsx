import './App.css'

import Coisa from './componentes/Coisa'
import PropsTeste from './componentes/PropsTeste'
import styles from './componentes/compoCSS.module.css'
//é possivel criar os componentes CSS em um arquivo separado e os importar para os elemwntos
function App() {

  return (
    <>
      <div className={styles.letras} >
          <h1>Ola mundo em react</h1>

         
          <div className={styles.ParaParagrafos}>
            <Coisa />
          </div>
          
          <PropsTeste nome={"felipe"} idade={12}/>
      </div>
    </>
  )
}

export default App
