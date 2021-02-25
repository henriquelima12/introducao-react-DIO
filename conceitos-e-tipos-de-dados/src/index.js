import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import List from './List';
import Event from './Event';


ReactDOM.render(
  <div>
    <App></App>,
    <Event></Event>,
    <List></List>
  </div>,
  document.getElementById('root')
);
