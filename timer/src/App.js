import React from 'react';
import './App.css';
import Header from './Components/Header';
import Timer from './Components/Timer';

function App() {
  // const [timer, setTimer] = useState(0);
  return (
    <div>  
      <Header />
      <Timer />
    </div>
  );
}

export default App;
