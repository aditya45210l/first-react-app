import React,{useState} from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [selectedOption, setSelectedOption] = useState("Light");
  const handleSelectOption = (event) =>{
    setSelectedOption(event.target.value);
    props.changeMode(event.target.value);
  }
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
      <div className={`container-fluid text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <Link className="navbar-brand" to="/">
          {props.titel}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" >
                about
              </Link>
            </li>
          </ul>
          <select value={selectedOption} className="btn btn-secondary dropdown-toggle" aria-label="Small select example" onChange={handleSelectOption} >
            <option value="light">Light</option>
            <option value="dark">Dark</option> 
            <option value="blue">Blue</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
