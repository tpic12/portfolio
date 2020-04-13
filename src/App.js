import React, { Component } from 'react';
import Landing from './Landing/Landing';
import ProjectLinus from './Linus/Linus';
import ProjectSpanimal from './Spanimal/Spanimal';
import ProjectQtrail from './Qtrail/Qtrail'
import About from './About/About';
import Contact from './Contact/Contact';
import Header from './header/header'
import './App.css';

class App extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.scrollFunction)
  }

  scrollFunction = () => {
    const header = <Header />
    const sticky = header.offsetTop;
    console.log('header: ', header)
    if(window.pageYOffset > sticky) {
      header.classList.add('sticky')
      header.classList.remove('hidden')
    } else {
      header.classList.remove('sticky')
      header.classList.add('hidden')
    }
  }
  
  render() {
    return (
      <div className="App">
        <main>
          <Landing />
          <About />
          <div className='projects snap'>
            <ProjectLinus />
            <ProjectSpanimal />
            <ProjectQtrail />
          </div>
          <Contact />
        </main>
      </div>
    );
  }
}

export default App;
