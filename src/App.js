import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggelMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // document.body.style.color = 'white';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // document.body.style.color = 'black';
    }
  }
  return (
    <>
  <Navbar titel="TextUtils" mode={mode} toggelMode={toggelMode}/>
  <div className="container my-3">
  <TextForm heading="Enter The text to analyze" mode={mode}/>
  </div>
  <div>
    {/* <About/> */}
  </div>
    </>
  );
}

export default App;
