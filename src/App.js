import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import School from './components/School';
import About from './components/about/About';
import HeaderComponent from './components/header-component/HeaderComponent';
import Help from './components/help/Help';
import EditStudent from './components/student-edit/EditStudent';
import PageNotFound from './components/page-not-found/PageNotFound';

const App = () => {
  return (
    <main className='main-container'>
      <HeaderComponent />
      <Switch>
        <Route path="/" component={School} exact />
        <Route path="/about" component={About} exact />
        <Route path="/help" component={Help} exact />
        <Route path="/edit/:id" component={EditStudent} exact />
        <Route component={PageNotFound} />
      </Switch>
    </main>
  );
};

export default App;
