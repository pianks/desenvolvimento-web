import logo from './logo.svg';
import './App.css';
import Arena from './components/Arena';
import World from './components/World';

function App() {
  return (
    <div className="App">    
        <World>
          <Arena arena = 'Arena Castelão'/>
          <Arena arena = 'Dos desempregados'/>
          <Arena arena = 'Dos estagiários'/>
        </World>
    </div>
  );
}

export default App;
