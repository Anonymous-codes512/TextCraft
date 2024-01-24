import React, { useState , useEffect} from 'react';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('mode');
    return savedMode || 'light';
  });

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    document.body.style.backgroundColor = newMode === 'light' ? 'white' : '#3a3a3a';
    localStorage.setItem('mode', newMode);
  };

  useEffect(() => {
    document.body.style.backgroundColor = mode === 'light' ? 'white' : '#3a3a3a';
  }, [mode]);

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextCraft" mode={mode} toggleMode={toggleMode} />
        {/* <Routes> */}
          {/* <Route path="/" element={ */}
          <TextForm heading="Enter the text below" mode={mode} />
          {/* } /> */}
          
          {/* <Route path="/about" element={
           <About mode={mode}/> 
           /> }
         </Routes> 
      </Router> */}
    </>
  );
}

export default App;
