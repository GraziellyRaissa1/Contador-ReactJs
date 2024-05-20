import {useState} from "react"
import "./App.css"

export default function App(){

const [numero, setNumero] = useState(0)

function aumentar(){
  setNumero(numero + 1)
}

function diminuir(){
  setNumero(numero - 1)
}

  return <section>
    <h1>Contadora</h1>
    <p>{numero}</p>
    <div id="buttons">
      <button onClick={aumentar}>Mais</button>
    <button onClick={diminuir}>Menos</button>
    </div>
    
  </section>
}
