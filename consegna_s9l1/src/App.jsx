import './App.css'
import Button from './components/Button'
import Img from './components/Img'

function App() {
  return (
    <>
      <div>
        <Button etichetta="PRIMO BOTTONE" />
        <Button etichetta="SECONDO BOTTONE" />
      </div>
      <div>
        <Img src="https://placecats.com/300/300" alt="Gattin" />
        <Img src="https://placebear.com/300/300" alt="Cagnolino" />
      </div>
    </>
  )
}

export default App
