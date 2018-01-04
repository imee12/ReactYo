import React from 'react';
import { Route } from 'react-router-dom';
import <%= name %> from '../containers/<%= name %>';


const App = () => (
  <div className="main">
    <div>App.jsx with Container</div>
    <Route exact path="/" component={<%= name %>} />

  </div>
);

export default App;
