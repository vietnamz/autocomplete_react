import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

import AutoComplete from "./AutoComplete";

const App = () => {
  return (
    <div className="App">
      <AutoComplete
        options={[
          "Papaya",
          "Persimmon",
          "Paw Paw",
          "Prickly Pear",
          "Peach",
          "Pomegranate",
          "Pineapple"
        ]}
        />
    </div>
  );
};

export default App;
