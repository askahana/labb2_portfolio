import React from 'react'
import school from '../data/info.json';

const Education = () => {
  return (
    
        <section id="education">
            <div  className="section-title">
                <h2>Education<h3>Utbildningar</h3></h2>
            </div>
            <div className="content">
            {
                    school.schools.map((school) => (
                        <div key = {school.id}>
                            <p><i class="fa-solid fa-school"></i> {school.period}</p>
                            <p>{school.schoolName}</p>
                            <p> {school.other}</p>
                        </div>
            ))}
            </div>
        </section> 
  )
}

export default Education