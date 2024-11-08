import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
  <Navbar titel="TextUtils"/>
  <div className="container my-3">
  <TextForm heading="Enter The text to analyze"/>
  </div>
  <div>
    {/* <About/> */}
  </div>
    </>
  );
}

export default App;
