import React from 'react';
import { Route } from 'react-router-dom';
import <%= name %> from '../containers/<%= name %>Container';

const App = () => (
  <div className="main">
    <div>App.jsx with Container</div>
    <Route exact path='<%= url %>' component={<%= name %>} />
  </div>
);

export default App;
