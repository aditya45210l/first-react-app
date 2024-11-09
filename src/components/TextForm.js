import React, {useState} from 'react'
export default function Textform(props) {
  const handleOnChange = (event) =>{
    console.log("Changed")
    setText(event.target.value);
  }
  const hendleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const hendleLoClick = () =>{
    let newTask = text.toLowerCase();
    setText(newTask);
  }
  const hendleFirstLetterClick = () =>{
    let sliceText = text.split('.');
    for(let i = 0; i < sliceText.length; i++){
      sliceText[i] = sliceText[i].toLowerCase();
      if(sliceText[i].charAt(0) === ' '){
        sliceText[i] = sliceText[i].slice(1);
        console.log(sliceText[i]);
        sliceText[i] = sliceText[i].charAt(0).toUpperCase() + sliceText[i].slice(1);
        sliceText[i] = ' ' + sliceText[i];
      }else{
        sliceText[i] = sliceText[i].charAt(0).toUpperCase() + sliceText[i].slice(1);
      }
      console.log(sliceText);
    }
    setText(sliceText.join('.'));
  }
  const hendleClearClick = () => {
    setText('');
  }

  const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{color : props.mode === 'dark' ? "white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" style={{backgroundColor: props.mode ==='dark'? 'grey':'white',color: props.mode === 'dark' ? 'white': 'black'}} id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={hendleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={hendleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={hendleFirstLetterClick}>Capitalize First Letter</button>
        <button className="btn btn-danger mx-1" onClick={hendleClearClick}>Clear</button>
      </div>
      <div className="container" style={{color: props.mode === 'dark'? 'white': 'black'}}>
        <h2>Text Summary</h2>
        <p>{text.split(' ').length} words and {text.length} characters</p>
  
      </div>
    </>
  )
}

