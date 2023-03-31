import React, {FunctionComponent, PropsWithChildren, useState} from 'react';

import './App.scss';
import Counters from './components/Counters/Counters';
import EmptyState from './components/EmptyState/EmptyState';

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
