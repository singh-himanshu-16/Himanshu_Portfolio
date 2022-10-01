import React from "react";
import './Homepage.css';
import github from '../../images/github.png';
import linkedIn from '../../images/linkedIn.png';

function Homepage(){
    return (
        <div className="homepage_container" id="about">
        <div className="homepage_left">
        <p className="homepage_left_h1"><span className="red_color">Hi, </span>my name is</p>
        <p className="homepage_left_h2">Himanshu Singh.</p>
       <p className="homepage_left_h3">B.tech CSE student at <span className="red_color_h3">Lovely Professional University</span></p>
        <p className="homepage_left_description">Full Stack Web Developer</p>
        <div>
            <a href="https://github.com/singh-himanshu-16" target="_blank"><img src={github} alt="githubimage" className="homepage_logo"/></a> 
            <a href="https://www.linkedin.com/in/singhhimanshu16/" target="_blank"><img src={linkedIn} alt="linkedinimage" className="homepage_logo"/></a>
        </div>
        <a href="singhhimanshu1220@gmail.com">
            <button className="homepage_left_button">Get in Touch</button>
             </a>
        </div>
        {/*<div className="homepage_right">
        <img src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif" alt="GIF"/>
        </div>
*/}
        </div>
    );

}

export default Homepage

