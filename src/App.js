import React from 'react';

import './App.css';

import Header from './componentes/header';

import About from './componentes/About';

import Footer from './componentes/Footer';

import ExtraFooter from './componentes/ExtraFooter';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Footer />
      <ExtraFooter />
    </div>
  );
}

export default App;
