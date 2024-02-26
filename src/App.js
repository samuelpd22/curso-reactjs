
import './App.css';
import HelloWorld from './components/HelloWorld';


function App() {
  const name= "Samuel";

  const newName = name.toUpperCase();

  function sum(a, b){
    return a + b;
  }

  const url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHNo-lk0YLf0NOXf3MG3ZLaZi9dkY3a5o1AD065jj0a-bpLQpm4VqdPAgA04OzzmnzAUY&usqp=CAU"

  return (
    <div className="App">
      <p>Ola, {newName}</p>
      <p>Soma {sum(4,4)}</p>
      <img src={url} alt="Minha imagem"/>
      <HelloWorld/>
     
    </div>
  );
}

export default App;
