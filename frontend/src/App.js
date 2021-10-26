import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Flower } from 'features/garden/index'

function App() {
  return (<>
  <h1> Hello World </h1>
  <Flower/>
  </>);
}

export default App;
