import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  let initialName = window.xprops && window.xprops.name ? window.xprops.name : ''
  let [myWord, changeMyWord] = useState(initialName)

  console.log("/APP")
  console.log(window.xprops)

  return (
    <div className="App">
      <p>
        Hello I'm a beautiful widget!
         My name is <code>{myWord}</code>
      </p>
      <input
        value={myWord}
        onChange={e => changeMyWord(e.target.value)}
      />
      <button
        onClick={() => window.xprops.passDownFunc(myWord)}>
        Pass this word up to parent
         </button>
    </div>
  );
}

export default App;
