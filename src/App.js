
import './App.css';
import OutraLista from './components/OutraLista';



function App() {
  
  const meusCarros = ['i30' , 'Civic type R' , 'Fusion'];
  

  return (
    <div className="App">
      <h1>Renderisação de listas</h1>
      <OutraLista itens={meusCarros}/>
      
    </div>
  );
}

export default App;
