
import './App.css';

function App() {
  const name= "Samuel";

  const newName = name.toUpperCase();

  function sum(a, b){
    return a + b;
  }

  const url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHNo-lk0YLf0NOXf3MG3ZLaZi9dkY3a5o1AD065jj0a-bpLQpm4VqdPAgA04OzzmnzAUY&usqp=CAU"
  return (
    <div className="App">
      <h1>Ola react</h1>
      <p>Meu primeiro app</p>
      <p>Ola, {newName}</p>
      <p>Soma {sum(4,4)}</p>
      <img src={url} alt="Minha imagem"/>
    </div>
  );
}

export default App;
