import React, {FunctionComponent, PropsWithChildren, useState} from 'react';

import './App.scss';
import Counters from './components/Counters/Counters';
import EmptyState from './components/EmptyState/EmptyState';
import Navigation from './components/Navigation/Navigation';

function App() {
  const allCounters = JSON.parse(localStorage.getItem('counters') || '[]');

  return (
    <div className="App">
      <Navigation allCounters={allCounters} />
      <Counters counters={allCounters} />
    </div>
  );
}

export default App;
