import "./styles.css";
const FooterContent = () =>{
    let imglink = require('./Photos/LinkedIn Logo.png');
    return(
        <footer>
            <a href="https://www.linkedin.com/in/shereya-philip-503200235/" className="left-foot-con">LinkedIn</a>
            <a href="https://github.com/shereya" className="right-foot-con">GitHub</a>
        </footer>
    )
}
export default FooterContent;