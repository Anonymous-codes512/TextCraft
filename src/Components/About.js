import React from "react";
import '../CSS/About.css';

export default function About(props){
    return(
        <>
            <div className="Container" style={{color:props.mode === 'light'?'#3a3a3a':'white'}}>
                <p className="appName">TextCraft</p>
                <p className="description">
                    TextCraft is a versatile text analysis tool designed to empower users with a seamless and efficient text manipulation experience. Whether you're a writer, developer, or anyone working with text, TextCraft provides a range of essential features to enhance your workflow. From converting text to uppercase or lowercase with a single click, to utilizing a built-in text-to-speech function for auditory feedback, TextCraft simplifies text transformations.
                </p>
            </div>
        </>
    );
};