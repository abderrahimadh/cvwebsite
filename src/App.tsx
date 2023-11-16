import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { LeftSection } from './components/LeftSection';
import { RightSection } from './components/RightSection';

function App() {
  return (
    <div className="cv">
      <Header />
      <div className="sections">
        <LeftSection />
        <RightSection />
      </div>
      <hr className="light" />
      <footer>&copy; copyright 2023. ABDERRAHIM ADHAOUR. Dernière Mise à jour : 30/10/2023. All rights reserved</footer>
    </div>
  );
}

export default App;
