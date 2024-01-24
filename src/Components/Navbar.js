import React from 'react';
import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
     
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        
        <div className="container-fluid">
        
            {/* <Link className="navbar-brand mx-3 fs-2" to="/"><strong>{props.title}</strong></Link> */}
            <a className="navbar-brand mx-3 fs-2" href="/"><strong>{props.title}</strong></a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
                {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active mx-3" aria-current="page" to="/">Home</Link>
                        <a className="nav-link active mx-3" aria-current="page" href="/">Home</a>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link mx-3" to="/about">About</Link>
                        <a className="nav-link mx-3" href="/about">About</a>
                    </li>

                </ul> */}
        
            </div>
        
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                <label className={`form-check-label text-${props.mode === 'light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Dark':'Light'}</label>
            </div>
        
        </div>
    
    </nav>
  )
}

Navbar.prototype = {title : PropTypes.string.isRequired}

Navbar.defaultProps = {title : "App Title"}