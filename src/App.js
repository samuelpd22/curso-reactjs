import { BrowserRouter as Router ,Routes ,Route , Link} from 'react-router-dom';
import Home from './pages/components/Home';
import Contato from './pages/components/Contato';
import Empresa from './pages/components/Empresa';
import './App.css';






function App() {
  
  return (
    <Router>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/contato'>Contato</Link></li>
      <li><Link to='/empresa'>Empresa</Link></li>
    </ul>



          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/empresa" element={<Empresa />} />
          </Routes>
  </Router>
    
  );
}

export default App;
