import React from 'react'
import me from '../assets/ProfileImage.jpg'

const About = () => {
  return (
    <main className="aboutme">
    <div  className="section-title">
      <h2>About me<h3>Om mig</h3></h2>
    </div>
    <div className="content">
    <div className="me-image">
      <img src= {me} alt="Asuka Hanada picture"/>
    </div>
    <div className="me-text">
        <h2>Asuka Hanada</h2>
        <p>Jag heter Asuka Hanada, utalas aska. Just nu läser jag systemutveckling .NET på Campus i Varberg, 
            <br/>och min utblidningen blir färdig 2025.
            <br/>
            Jag utbilidade mig till lärare på ämnet på japasnka som andra språk,
        och jobbade som lärare i Sverige i ungefär 6 år.
      </p>
    </div>
  </div>
</main>
  )
}

export default About