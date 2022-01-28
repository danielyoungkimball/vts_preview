import React, { useEffect, useState } from 'react';
import logo from './vts.jpg';
import "./styles.css";

function App() {

  const [text, setText] = useState("");

  useEffect(() => {
    text !== "...." ? setTimeout(() => { setText(text + ".") }, 1000) : setText("");
  }, [text]);

  return (
    <div >
      <header >
        <div className="container">
          <img className="mydog" src={logo} alt="logo" />
          <h1>VoteTheStock</h1>
          <h2>Coming Soon{text}</h2>
        </div>
      </header>
    </div>
  );
}

export default App;
