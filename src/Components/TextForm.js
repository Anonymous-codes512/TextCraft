import React, {useState} from 'react'
import PropTypes from 'prop-types'

 
export default function TextForm(props) {
    
    const [text, setText] = useState("");
    
    const changeControl = (event)=>{
        setText(event.target.value);
    };

    const toUpperCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    };
    
    const toLowerCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    };

    const clear = ()=>{
        let newText = '';
        setText(newText);
    };

    const copyText = ()=>{
        navigator.clipboard.writeText(text);
        alert('Text copied');
    };
    
    const removeSpaces = () => {
        let newText = text.split(/\s+/);
        setText(newText.join(" "));
      };
      

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    
    return (
    <div className="container my-3 " style={{color:props.mode==='light'?'#3a3a3a':'white'}}>
        
        <div className="mb-3">
            <h2>{props.heading}</h2>
            <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="10" onChange={changeControl} style={{ backgroundColor: props.mode==='light'?'white':'#3a3a3a',color:props.mode==='light'?'#3a3a3a':'white'}}></textarea>
        </div>
        
        <div className="mb-3 my-2">
            <label htmlFor="exampleFormControlInput1" className="form-label">Total Characters = {text.length}</label> <br/>
            <label htmlFor="exampleFormControlInput1" className="form-label">Total Words = {text.length === 0 ? '0' :text.split(' ').length }</label>
        </div>
        
        <button className='btn btn-primary mx-1 my-1' onClick={toUpperCase}>Convert To UpperCase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={toLowerCase}>Convert To LowerCase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={clear}>Clear Text</button>
        <button className='btn btn-primary mx-1 my-1' onClick={copyText}>Copy Text</button>
        <button className='btn btn-primary mx-1 my-1' onClick={removeSpaces}>Remove Extre Spaces</button>
        <button className='btn btn-primary mx-1 my-1' onClick={speak}>Text to Speach</button>
    </div>
  )
}

TextForm.prototype = {heading : PropTypes.string.isRequired}
TextForm.defaultProps = {heading : "Enter heading here"}