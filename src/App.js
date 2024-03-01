
import { useState } from 'react';
import './App.css';





function App() {

  const [num,setNum] = useState(1);

  return (
    <div className="App">
      <h1>State lift 2</h1>
      <p>Valor do state num:{num}</p>
      <button onClick={()=>setNum(num + 1)}> AUMENTAR VALOR </button>
     
     
     
      
    </div>
  );
}

export default App;
