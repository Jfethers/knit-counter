import React, {FunctionComponent, PropsWithChildren, useState} from 'react';

import './App.scss';
import Counters from './components/Counters/Counters';
import EmptyState from './components/EmptyState/EmptyState';
import Navigation from './components/Navigation/Navigation';

function App() {
  const counters = JSON.parse(localStorage.getItem('counters') || '[]');

  return (
    <div className="App">
      <Navigation counters={counters} />
      <Counters counters={counters} />
    </div>
  );
}

export default App;
