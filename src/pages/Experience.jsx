import React from 'react'
import work from '../data/info.json';

const Experience = () => {
  return (
    <section id="experience">
    <div  className="section-title">
        <h2>Jobb experience<h3>Arbetserfarenheter</h3></h2>
    </div>
    <div className="content">
    {
                    work.works.map((work) => (
                        <div key = {work.id}>
                            <p><i class="fa-solid fa-school"></i> {work.period}</p>
                            <p>{work.schoolName}</p>
                            <p> {work.subject}</p>
                        </div>
                ))}
                </div>
</section>
  )
}

export default Experience