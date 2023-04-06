import React, { useEffect, useState } from 'react';

import './App.scss';
import Counters from './components/Counters/Counters';
import Navigation from './components/Navigation/Navigation';

function App() {
  const [ counters, setCounters ] = useState([]);

  const getStorage = () => {
    const counters = JSON.parse(localStorage.getItem('counters') || '[]');
    setCounters(counters);
  }

  useEffect(() => {
    getStorage();
    window.addEventListener('storage', (e: Event) => getStorage());
    return () => window.removeEventListener('storage', (e: Event) => getStorage());
  }, [])

  return (
    <div className="App">
      <Navigation counters={counters} />
      <Counters counters={counters} />
    </div>
  );
}

export default App;
