import React from "react";
import './Projects.css';
import ProjectBox from './ProjectBox/ProjectBox';
import netflix_clone from '../../images/netflix_clone.png';
import todoapp from '../../images/todoapp.png';

export default function Projects(){
     const projectData = [
        {
            iconImage: netflix_clone,
            title:'Netflix Clone',
            sentences: [
                " It has a login, signup and signout functionality.",
                " Technologies - Reactjs, JavaScript, HTML, CSS",
                
            ],
            link: 'https://bit.ly/3SqDqj0'
        },
        {
            iconImage: todoapp,
            title:'ToDo App',
            sentences: [
                "It has an add a todo list and delete function also",
                "Technologies - Reactjs, JavaScript, HTML, CSS",
            ],
            link: 'https://bit.ly/3SGrxFt'
        },
     ];

     return (
        <div className="projects_box_maincontainer">
            <p className="projects_title">Projects</p>
            <div className="projects_box_container">
                {projectData.map((value, index)=>(
                   <ProjectBox
                    title ={value.title}
                    image={value.iconImage}
                    sentences ={value.sentences}
                    link ={value.link}

                   /> 
                )
                )}
            </div>
        </div>
     );
}