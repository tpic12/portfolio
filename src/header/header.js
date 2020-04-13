import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <section className="header-section">
        <header className='header'>
          <h1>Taylor</h1><br/><h2>Piccarreto</h2>
          <div className='burger'>
            <p>+</p>
          </div>
        </header>
        <main>
          
        </main>
      </section>
    );
  }
}

export default Header;