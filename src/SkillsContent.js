import React from 'react'
import "./styles-skills.css"
function SkillsContent() {
  return (
    <div className='skills-box'>
        <div className='box-1'>
            <div className='box-1-header'>
                <div className='red'></div>
                <div className='yellow'></div>
                <div className='green'></div>
            </div>
            <div className='box-1-con'>
                <p>Languages and Frameworks</p>
                <ul>
                    <li>C</li>
                    <li>C++</li>
                    <li>Python 3</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>MySQL</li>
                    <li>React</li>
                    <li>React Native</li>
                </ul>
            </div>
        </div>
        <div className='box-2'>
            <div className='box-2-header'>
                <div className='red'></div>
                <div className='yellow'></div>
                <div className='green'></div>
            </div>
            <div className='box-2-con'>
                <p>Soft Skills</p>
                <ul>
                    <li>Creativity</li>
                    <li>Leadership</li>
                    <li>Problem Solving</li>
                    <li>Attention to Detail</li>
                    <li>Good Team Player</li>
                </ul>
            </div>
        </div>
        <div className='box-3'>
            <div className='box-3-header'>
                <div className='red'></div>
                <div className='yellow'></div>
                <div className='green'></div>
            </div>
            <div className='box-3-con'>
                <p>Curricular and Co-Curricular Activities</p>
                <ul>
                    <li>CGPA : 8.52 (calculated till the 3rd semester)</li>
                    <li>10th Score: 478/500</li>
                    <li>12th Score: 474/500</li>
                    <li>Passed the LinkedIn Assessment Test in Python, C and ReactJS</li>
                    <li>National Level Subject Topper, English, AISSE 2019</li>
                    <li>Finalist, Hackmaggedon 2023, a intra-college Hackathon organised by REC Chennai</li>
                    <li>Core Team Member of Recharge 2023 organised by REC Chennai</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SkillsContent;