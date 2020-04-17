import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Main from './components/Main'
import Header from './components/Header'

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default hot(module)(App);