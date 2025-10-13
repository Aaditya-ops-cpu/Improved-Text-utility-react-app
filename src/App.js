import React, { useState } from 'react';
import './App.css'; // Corrected import
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes, // Corrected import
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },3000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert(" Dark mode has been enabled","success ");
      document.title = "TextUtils - Dark mode";
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enabled","success ");
      document.title = "TextUtils - Light mode";
    }
  }
  return (
    <>
    <Router>
      <Navbar title="textUtils" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert  = {alert}/>
      <div className="container my-3">
        <Routes> {/* Use Routes instead of Switch */}
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
        </Routes>
      </div>
       </Router>
    </>
  );
}

export default App;
