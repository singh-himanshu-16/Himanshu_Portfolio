import React from "react";
import './ExperienceCard.css';

export default function ExperienceCard({companyName, designation, statements, iconImages}) {
    return (
        <div className="ex_card_container">
            <p className="ex_card_title">{companyName}</p>
            <p className="ex_card_designation">Designation: {designation}</p>


            {statements.map((value, index)=>(
                <p className="ex_card_statements">{value}</p>
            )
            )}
            <p className="ex_card_techused_title">Tech Stack Used</p>

            <div className="ex_card_iconimages_container">
                {iconImages.map((value, index)=>(
                    <img src={value}/>
                )
                )}
            </div>
           
            
        </div>
    );
}