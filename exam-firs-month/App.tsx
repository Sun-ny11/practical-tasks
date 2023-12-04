import React, { useState } from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';


function App() {

  const [countState, setCountState] = useState<number>(0)

  const add = () => countState === 5 ? countState : setCountState(countState + 1)
  const reset = () => setCountState(0)

  return (
      <Counter countState={countState}
                add={add}
                reset={reset}/>
  );
}

export default App;
