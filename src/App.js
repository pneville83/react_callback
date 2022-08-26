//import { useEffect, useState } from 'react';
import { useState } from 'react';
import './App.css';
import Box from './components/Box';

function App() {
  const [count, updateCount] = useState (0);

  function clickCall (boxes) {
    updateCount (count +1);
      if (boxes === 1) {
        updateCount1 (count1 +1)
      }if (boxes === 2) {
        updateCount2 (count2 +1)
      } else {
        updateCount3 (count3 +1);
        
      }
  }

  const [count1, updateCount1] = useState (0);
  const [count2, updateCount2] = useState (0);
  const [count3, updateCount3] = useState (0);




  return (
    <div className="App">
      <Box id ={1} boxDifference = {count2} clickCall={clickCall} />
      <Box id ={2} boxDifference = {count1} clickCall={clickCall} />
      <Box id ={3} boxDifference = {count1 + count2} clickCall={clickCall} />
      <div className="box2">
        <p>Contador Total = {count}</p>
      </div>
    </div>
  );
}

export default App;
