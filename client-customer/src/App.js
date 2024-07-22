import './App.css';
import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import MyProvider from './contexts/MyProvider';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./components/Footer.js";
class App extends Component {
  render() {
    return (
      <MyProvider>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
        <Footer />
      </MyProvider>
    );
  }
}
export default App;
