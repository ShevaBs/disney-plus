import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import Detail from './components/Detail';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/detail'>
          <Detail/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
