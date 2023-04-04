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
      {allCounters && allCounters.length ? (
        <Counters counters={allCounters} />
      ) : ( 
        <EmptyState />
      )}
    </div>
  );
}

export default App;
