import React from 'react';
import './App.scss';
import Routes from './components/routes/Routes'
import Navigation from './components/navigatiopn/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
