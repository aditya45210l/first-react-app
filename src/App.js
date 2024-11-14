import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const changeMode = (value) => {
    console.log("you Clicked!");
    console.log(value);
    if (value === "dark" || value === "blue") {
      console.log(`need Text to white and background to ${value}`);
      if (value === "dark") {
        document.body.style.backgroundColor = "#191b1e";
        setMode("dark");
        showAlert("Dark mode has been selected!", "success");
      } else {
        document.body.style.backgroundColor = "#042743";
        setMode("dark");
        showAlert("Blue mode has been selected!", "success");
      }
    } else {
      console.log(`need Text to black and background to ${value}`);
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been selected!", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar titel="TextUtils" mode={mode} changeMode={changeMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />} />

          <Route exact path="/" element={<div className="container my-3">
              <TextForm heading="Enter The text to analyze" mode={mode} />
            </div>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
