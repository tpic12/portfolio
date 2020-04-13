import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
  logo = () => {
    return '</>'
  }
  render() {
    return (
      <section className='landing-section'>
        <div className='landing-div snap'>
          <div className='name-tag-div'>
            <h1>Taylor<br />Piccarreto</h1>
            <p>Hi, I’m Taylor, and I like my applications like I like my pancakes: Fullstack and no bugs.</p>
          </div>
          <div className='landing-circle'>
            <span className='logo'>{this.logo()}</span>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;