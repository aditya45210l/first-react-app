import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('');

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const hendleUpClick = () => {
    setText(text.toUpperCase());
  };

  const hendleLoClick = () => {
    setText(text.toLowerCase());
  };

  const hendleFirstLetterClick = () => {
    let sliceText = text.split('.');
    for (let i = 0; i < sliceText.length; i++) {
      sliceText[i] = sliceText[i].toLowerCase();
      if (sliceText[i].charAt(0) === ' ') {
        sliceText[i] = sliceText[i].slice(1);
        sliceText[i] = sliceText[i].charAt(0).toUpperCase() + sliceText[i].slice(1);
        sliceText[i] = ' ' + sliceText[i];
      } else {
        sliceText[i] = sliceText[i].charAt(0).toUpperCase() + sliceText[i].slice(1);
      }
    }
    setText(sliceText.join('.'));
  };

  const hendleClearClick = () => {
    setText('');
  };
  const hendleSpacesClick = ()=>{
    setText(text.replace(/\s+/g,' '));
  }

  const countWords = () => {
    if (!text.trim()) {
      return 0;
    }
    return text.trim().split(/\s+/).length;
  };
  function selectColor(type){
    console.log("i am enter in selectColor!")
    console.log(props.mode,' :its me mode!')
    if(type === 'backgroundColor') {
      if(props.mode === 'dark'||props.mode === 'light'){
        return props.mode === 'dark' ? 'grey' : 'white';
  
      }
      else if(props.mode === 'blue'){
        console.log("i am enter in blue color!")
        return '#063f6c';
      }
    }
    else if(type === 'color'){
      if(props.mode === 'dark'||props.mode === 'light'){
        return props.mode === 'dark' ? 'white' : 'black';
      }
      if(props.mode === 'blue'){
        return 'white';
      }
    }
  }

  return (
    <>
      <div className="container" style={{ color: selectColor("color") }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: selectColor("backgroundColor"),
              color: selectColor("color"),
            }}
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className={`btn btn-${props.mode === 'dark' ? 'secondary' : 'primary'} mx-1 my-1`} onClick={hendleUpClick}>
          Convert Uppercase
        </button>
        <button className={`btn btn-${props.mode === 'dark' ? 'secondary' : 'primary'} mx-1 my-1`} onClick={hendleLoClick}>
          Convert Lowercase
        </button>
        <button className={`btn btn-${props.mode === 'dark' ? 'secondary' : 'primary'} mx-1 my-1`} onClick={hendleFirstLetterClick}>
          Capitalize First Letter
        </button>
        <button className={`btn btn-${props.mode === 'dark' ? 'secondary' : 'primary'} mx-1 my-1`} onClick={hendleSpacesClick}>
          Remove Extra space
        </button>
        <button className="btn btn-danger mx-1" onClick={hendleClearClick}>
          Clear
        </button>
      </div>
      <div className="container" style={{ color: selectColor("color") }}>
        <h2>Text Summary</h2>
        <p>{countWords()} words and {text.length} characters</p>
      </div>
    </>
  );
}
