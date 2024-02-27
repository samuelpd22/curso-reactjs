
import './App.css';
import SayMayName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';



function App() {
  

  const nome = "Maria";

 

  return (
    <div className="App">
      <Frase/>
      <h1>Testando css</h1>
      <SayMayName nome={nome}/>
      <Pessoa nome="Rodrigo" idade="28" profissao="programador" foto="https://via.placeholder.com/150"/>
      <List/>

     
    </div>
  );
}

export default App;
