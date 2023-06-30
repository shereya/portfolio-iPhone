import "./styles.css"
import {Link} from "react-router-dom";
import {useState} from "react";
const Navbar = () =>{
    let [aboutMe, setAboutMe] = useState("ABOUT ME");
    let [photography,setPhotography] = useState("PHOTOGRAPHY");
    let [skills, setSkills] = useState("SKILLSET");
    const handleMouseOverHome = ()=>{
        setAboutMe("about me");
    }
    const handleMouseOutHome = ()=>{
        setAboutMe("ABOUT ME");
    }
    const handleMouseOverPhot = ()=>{
        setPhotography("photography");
    }
    const handleMouseOutPhot = ()=>{
        setPhotography("PHOTOGRAPHY");
    }
    const handleMouseOutSkills = ()=>{
        setSkills("SKILLSET");
    }
    const handleMouseOverSkills = ()=>{
        setSkills("skillset");
    }
    return(
        <nav>
            <Link to="/" className="name">Shereya Philip</Link>
            <ul>
                <li className="left">
                    <Link to="/about" className="about-nav" onMouseOver={handleMouseOverHome} onMouseOut={handleMouseOutHome}>{aboutMe}</Link>
                </li>
                <li className="middle">
                    <Link to="/photography" className="photo-nav" onMouseOver={handleMouseOverPhot} onMouseOut={handleMouseOutPhot}>{photography}</Link>
                </li>
                <li className="right">
                    <Link to="/skills" className="skills-nav" onMouseOver={handleMouseOverSkills} onMouseOut={handleMouseOutSkills}>{skills}</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;