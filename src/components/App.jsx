import React from 'react';
import { Route } from 'react-router-dom';
import Stuff from '../containers/Stuff';


const App = () => (
  <div className="main">
    <div>App.jsx with Container</div>
    <Route exact path="/" component={Stuff} />

  </div>
);

export default App;
