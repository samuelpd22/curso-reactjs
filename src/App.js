
import './App.css';
import SayMayName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';


function App() {
  

  const nome = "Maria";

 

  return (
    <div className="App">
      <Frase/>
      <Frase/>
      <h1>Testando css</h1>
      <SayMayName nome="Samuel"/>
      <SayMayName nome="Lara"/>
      <SayMayName nome="Igor"/>
      <SayMayName nome="Savv"/>
      <SayMayName nome={nome}/>
      <Pessoa nome="Rodrigo" idade="28" profissao="programador" foto="https://via.placeholder.com/150"/>
     
    </div>
  );
}

export default App;
