import React from 'react';
import './App.css';

import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-title'>Counter app in ReactJS</h1>
      </header>
      <Counter initValue={0} />
      <Counter initValue={22} />
    </div>
  );
}

export default App;
