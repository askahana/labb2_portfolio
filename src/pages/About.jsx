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
            och min utblidningen blir färdig 2025.
            <br/> <br/>
            Tidigare har jag jobbat som lärare i ämnet japanska som andra språk i 6 år, men nu har jag bestämt mig att 
            utmana mig själv, och få möjlighet att utvecklas.
            <br/> <br/>
            Som person är jag noggrann och bra på arbeta självständigt.
      </p>
    </div>
  </div>
</main>
  )
}

export default About