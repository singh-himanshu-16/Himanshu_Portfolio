import React from "react";
import './Experience.css';
import react from "../../images/react.svg";
import js from "../../images/js.png";
import css from "../../images/css.svg";
import html from "../../images/html.svg";
import firebase from "../../images/firebase.png";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

export default function Experience(){
    const statements =[
        "1. ABCDEFGHIJKLMN",
        "2. ABCDEFGHIJKLMN",
        "3. ABCDEFGHIJKLMN",
        "4. ABCDEFGHIJKLMN",
    ];

    const iconImages =[react, js, css, html];
    const iconImages2 =[css, react, js, firebase];

    return (
        <div className="experience_container">
            <p className="experience_title">Experience</p>
            <div className="experience_card_container">
                <ExperienceCard
                companyName="JPMorgan"
                designation="CEO"
                statements={statements}
                iconImages={iconImages}
                />
                 <ExperienceCard
                companyName="Morgan Stanley"
                designation="CEO"
                statements={statements}
                iconImages={iconImages2}
                />
            
               
            </div>
        </div>
    );

}