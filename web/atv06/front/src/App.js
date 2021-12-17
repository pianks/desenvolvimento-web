import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import CreateAluno from './components/aluno/CreateAluno';
import ListAluno from './components/aluno/ListAluno';
import EditAluno from './components/aluno/EditAluno';

function App() {
  return (
    <div className = "container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to={'/'} className="navbar-brand">CRUD</Link>
      <div className="collapse navbar-collapse" id='navbarSupportedContent'>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to = {'/'} className="nav-link">INICIO</Link>
          </li>
          <li className="nav-item">
          <Link to = {'/createAluno'} className="nav-link">Criar Aluno</Link>
          </li>
          <li className="nav-item">
          <Link to = {'/listAluno'} className="nav-link">Listar Aluno</Link>
          </li>
        </ul>
      </div>
      </nav>
      <h2>PROJETO CRUD</h2>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/createAluno" component={CreateAluno}/>
        <Route exact path="/listAluno" component={ListAluno}/>
        <Route exact path="/editAluno/:id" component={EditAluno}/>
      </Switch>
    </div>
  );
}

export default App;