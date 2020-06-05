import React from 'react';
import { Route } from 'react-router-dom';
import CreateInformation from './components/CreateInformation';
import Main from './components/Main';

const App = () => {
  return (
    <div>
      <Route exact={true} path="/" component={Main} />
      <Route path="/createinformation" component={CreateInformation} />
    </div>
  );
};
export default App;
