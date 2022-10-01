import React from "react";
import './TechStack.css';
import c from '../../images/c.png';
import js from '../../images/js.png';
import react from '../../images/react.svg';
import html from '../../images/html.svg';
import css from '../../images/css.svg';
import github from '../../images/github.svg';
import python from '../../images/python.png';
import TechStackIconContainer from "./TechStackIconContainer/TechStackIconContainer";


function TechStack(){
const techstackData =[
{
        iconName: 'React',
        iconImage: react,
        iconAltProperty: "reactImage",
},
{
    iconName: 'Javascript',
    iconImage: js,
    iconAltProperty: "jsImage",
},
{
    iconName: 'HTML',
    iconImage: html,
    iconAltProperty: "htmlImage",
},
{
    iconName: 'Css',
    iconImage: css,
    iconAltProperty: "cssImage",
},
];
const techstackData2=[
    {
        iconName: 'C++',
        iconImage: c,
        iconAltProperty: "cppImage", 
    },
    {
        iconName: 'Python',
        iconImage: python,
        iconAltProperty: "pythonImage", 
    },
    {
        iconName: 'GitHub',
        iconImage: github,
        iconAltProperty: "githubImage", 
    },
];


    return (
        <div className="techstack_container" id="TechStack">
            <p className="techstack_title">Tech Stack</p>
            <div className="techstack_icon_container">
                {techstackData.map((item, index) => {
                    return (
                    <TechStackIconContainer
                    image={item.iconImage}
                    altProperty={item.iconAltProperty}
                    name={item.iconName}
                    />
                    );
                })}
            </div>
            <div className="techstack_icon_container2">
                {techstackData2.map((item, index) => {
                    return (
                    <TechStackIconContainer
                    image={item.iconImage}
                    altProperty={item.iconAltProperty}
                    name={item.iconName}
                    />
                    );
                })}
            </div>
        </div>
    );
}
export default TechStack