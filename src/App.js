
import { useState } from 'react';
import './App.css';
import Numerz from './components/Numerz';





function App() {
  const [num,setNum] = useState(1);
  return (
    <div className="App">
      <h1>State lift 2</h1>
      <Numerz num={num} setNum={setNum}/>
      
     
     
     
      
    </div>
  );
}

export default App;
