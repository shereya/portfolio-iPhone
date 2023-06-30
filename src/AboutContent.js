import React from 'react';
import "./styles-about.css";
function AboutContent() {
  let imgself = require('./Photos/Self.jpg')
  let imgicon = require('./Photos/Mail Icon.png')
  let imgres = require('./Photos/Resume Icon.png')
  return (
    <div>
      <img id='image-self' src={imgself}></img>
      <div className='about-content'>
        Hello! You are currently viewing a website that was fully designed and developed by me using HTML, CSS, JavaScript and ReactJS. I'm an engineering student with a passion that runs deep for programming.
        I knew I wanted to pursue Computer Science very early on in my life after seeing how
        computers made life easier for my parents. And soon after finishing 10th grade, I took one step closer to achieving my dream
        by taking up Python lessons in school. I struggled so hard with coding initially and was very close to giving up but one day at home with a different approach to solving
        a simple problem changed everything and with continuous practice and coming up with new solutions to problems, I fell in love with coding and there has been no looking back since.<br></br>
        College is where I realised two other passions of mine: writing and organising events. I was given the opportunity to help organise a 3-day cultural event that had over 18000 people in attendence over the 3 days of the event.
        Before the event, I wrote content for the social media handles, the e-mails that we sent out to sponors and the celebrities in attendance. I knew I was strong-willed but helping put together this event helped me to really thrive under pressure and deadlines.
        Photography is also something that I enjoy and it really helps me with finding beauty in the smallest of things.
        <br></br>I guess this little note pretty much sums up who I am. Thank you for stopping by!
        <br></br>
        <a href="mailto:211401051@rajalakshmi.edu.in"><img id='image-icon' src={imgicon}></img></a>
        <a href="https://drive.google.com/file/d/1RDGVpvPKfgVdWldzzAjgXU5DnC4YumMg/view?usp=sharing"><img id='image-res' src={imgres}></img></a>
      </div>
    </div>
  )
}

export default AboutContent