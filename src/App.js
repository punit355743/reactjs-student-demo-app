import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import School from './components/School';
import About from './components/about/About';
import HeaderComponent from './components/header-component/HeaderComponent';

const App = () => {
  return (
    <main className='main-container'>
      <HeaderComponent />
      <Switch>
        <Route path="/" component={School} exact />
        <Route path="/about" component={About} exact />
      </Switch>
    </main>
  );
};

export default App;
