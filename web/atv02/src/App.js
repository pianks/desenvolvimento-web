import logo from './logo.svg';
import './App.css';
import Arena from './components/Arena';
import World from './components/World';
import Hero from './components/Hero';
import Enemy from './components/Enemy';
import VS from './assets/vs.gif';
import { HERO_NAME, HERO_IMAGE, ENEMY_NAME, ENEMY_IMAGE } from "./components/Strings";

function App() {
  return (
    <div className="App">
      <World>
        <Arena arena='Arena Castelão'>
          <Hero name={HERO_NAME} img={HERO_IMAGE} />
          <img src={VS} />
          <Enemy name={ENEMY_NAME} img={ENEMY_IMAGE} />
        </Arena>
        <Arena arena='Dos desempregados'>
          <Hero name={HERO_NAME} img={HERO_IMAGE} />
          <img src={VS} />
          <Enemy name={ENEMY_NAME} img={ENEMY_IMAGE} />
        </Arena>

        <Arena arena='Dos estagiários'>
          <Hero name={HERO_NAME} img={HERO_IMAGE} />
          <img src={VS} />
          <Enemy name={ENEMY_NAME} img={ENEMY_IMAGE} />
        </Arena>

      </World>
    </div>
  );
}

export default App;
