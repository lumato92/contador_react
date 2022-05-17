import logo from './logo.svg';
import './App.css';
import Boton from "./components/Button"
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0)

  const sumarClic = () =>{
    setNumClics(numClics+ 1);
  }

  const reiniciarClic = () =>{
    setNumClics(0);
  }
  
  return (
    <div className="App">

      <h1> Contador de Clics</h1>
      

      <div className='main-container'>
      <Contador 
      numClics={numClics} />


      <Boton 
        texto = "Clic"
        esBotonDeClic={true}
        manejarClic= {sumarClic}
       
      />
      <Boton 
        texto="Reiniciar"
        esBotonDeClic={false}
        manejarClic= {reiniciarClic}

        />
      </div>
    </div>
  );
}


export default App;
