import React, {FunctionComponent, PropsWithChildren, useState} from 'react';

import './App.css';
import Counters from './components/Counters';
import EmptyState from './components/EmptyState';

function App() {
  const [ allCounters, setAllCounters ] = useState([]);
  return (
    <div className="App">
      {allCounters.length ? (
        <Counters counters={allCounters} />
      ) : ( 
        <EmptyState />
      )}
    </div>
  );
}

export default App;
