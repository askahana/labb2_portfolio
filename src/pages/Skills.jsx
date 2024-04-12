import React from 'react'
import csharp from '../assets/c-sharp-c.svg'
import html from '../assets/htmlcss.png'
import github from '../assets/github-logo_icon.png'
import { Link } from 'react-router-dom'

const Skills = () => {
  return (
    <div id="skill">
        <div  className="section-title">
            <h2>Skills<h3 className="skillH3">Vad jag kan göra</h3></h2>
        </div>
        <div className="content">
            <div className="card-list">
                <p className="card-listImage"><img src={csharp} alt="" /></p>
                <p className="descritptionName">C#</p>
                <p className="explanation">I am studing c#.</p>
            </div>
            <div className="card-list">
                <p className ="card-listImage"><a href="https://github.com/askahana/portfolio2" target="_balnk"><img src={html} alt="" /></a></p>
                <p className="descritptionName">HTML/ CSS</p>
                <p className="explanation">This pages' code. <br />Made with react.</p>
            </div>
            <div className ="card-list">
                <p className ="card-listImage"><Link to="/github"><img src={github} alt="" /></Link></p>
                <p className="descritptionName">Github</p>
                <p className="explanation">Github project lists.</p>
            </div>
        </div>
    </div>
  )
}

export default Skills