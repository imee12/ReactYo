import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class <%= name %> extends Component {
  static propTypes = {};

render() {
  return (
    <div className="changeLater">
      <div>COMPONENT</div>
      <div><%= name %></div>
    </div>
  );
}
}
