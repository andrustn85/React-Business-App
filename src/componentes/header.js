import React from 'react';
import logo from '../logo.svg'

export default function Header() {
    return (
        <header className="App-header">
        <img src={logo} 
        className="App-logo" 
        alt="logo" />
        <p className="nombre"> Andres R </p>
        <p className="trabajo"> React Dev ⚛ </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/andrustn/"
          target="_blank"
          rel="noopener noreferrer"
        > <i className='fa fa-linkedin-square' color='white' > Linkedin </i>

        </a>
      </header>
    )
}