import React from 'react';
import { Route } from 'react-router-dom';
import CreateInformation from './components/CreateInformation';
import Main from './components/Main';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Route exact={true} path="/" component={Main} />
      <Route path="/createinformation" component={CreateInformation} />
    </div>
  );
};
export default App;
