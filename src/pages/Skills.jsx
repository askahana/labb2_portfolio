import React from 'react'
import codeing from '../assets/coding.png'

const Skills = () => {
  return (
    <div id="skill">
        <div  className="section-title">
            <h2>Skills</h2>
        </div>
        <div className="content">
            <div className="card-list">
                <p className="card-listImage"><img src={codeing} alt="" /></p>
                <p>C#</p>
                <p>Jag kan koda med c#</p>
            </div>
            <div className="card-list">
                <p className ="card-listImage"><img src={codeing} alt="" /></p>
                <p>HTML/ CSS</p>
                <p></p>
            </div>
            <div className ="card-list">
                <p className ="card-listImage"><img src={codeing} alt="" /></p>
                <p>React</p>
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default Skills