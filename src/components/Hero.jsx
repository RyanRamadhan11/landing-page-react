import React from 'react';
import '../assets/css/style.css'

function Hero() {
    return(
      <section className="hero" id="hero">
        <div className="container">
          <div>
            <h1>Hello,</h1>
            <h1>Welcome to</h1>
            <h1>Enigma<span>Camp</span></h1>
            <a href="" type="button" className="register">Register Now</a>
          </div>
        </div>
      </section>
    );
}


export default Hero;
