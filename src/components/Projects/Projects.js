import React, { useState } from 'react';
import computerCenter from '../../images/computer-center.png'
import panda from '../../images/bootstrapWebsite.png'
import cookingMaster from '../../images/cokkingMaster.png'
import book from '../../images/bdBook.png'
import humanBazar from '../../images/humanBazar.png'
import './project.css'
const MyProjects =[
    {
        name:'Computer Center',
        category:'react',
        img:computerCenter,
        githubLink:`https://github.com/rahat9016/computer-center`,
        viewLink:`https://computercenterbyrahat.web.app/`,
        className:'computerCenter project',
        technology:'HTML, CSS, ReactJS, mongoDB, nodeJS, expressJS, Firebase, Heroku, Stripe'
    },
    {
        name:'Human Bazar',
        category:'react',
        img:humanBazar,
        githubLink:`https://github.com/rahat9016/computer-center`,
        viewLink:`https://myhumanproject9016.web.app/`,
        className:'humanBazar project',
        technology:'HTML, CSS, ReactJS, mongoDB, nodeJS, expressJS, Firebase, Heroku,',
    },
    
    {
        name:'cooking master',
        category:'javascript',
        img:cookingMaster,
        githubLink:`https://github.com/rahat9016/Assingment-5`,
        viewLink:`https://rahat9016.github.io/Assingment-5/`,
        className:'cookingMaster project',
        technology:'HTML, CSS, JavaScript, API',
    },
    {
        name:'Bangladesh Book Store',
        category:'javascript',
        img:book,
        githubLink:`https://github.com/rahat9016/booklist`,
        viewLink:`https://rahat9016.github.io/booklist/`,
        className:'bookStore project',
        technology:'HTML, CSS, JavaScript',
    },
    {
        name:'panda',
        category:'bootstrap',
        img:panda,
        githubLink:`https://github.com/rahat9016/boot`,
        viewLink:`https://rahat9016.github.io/boot/`,
        className:'panda project',
        technology:'HTML, CSS, Bootstrap',
    },

]
const Projects = () => {
    const [project,setProject] = useState(MyProjects)
    const filterProject = (categoryProject)=>{
        const updateProject = MyProjects.filter(myProject =>{
            return myProject.category === categoryProject
        })
        setProject(updateProject)
    }
    return (
        <div className="project-container" id="project">
            <div className="main-container">
            <h1 className="top-header">Project</h1>
            <div className="button-container">
                <button className="projectBtn" onClick={()=> setProject(MyProjects)}>All</button>
                <button className="projectBtn" onClick={()=> filterProject('javascript')}>JavaScript</button>
                <button className="projectBtn" onClick={()=> filterProject('react')}>React</button>
                <button className="projectBtn" onClick={()=> filterProject('bootstrap')}>Bootstrap</button>
            </div>
            <div className="project-wrapper">
                {
                    project.map(project => {
                        const {img,name,githubLink,viewLink,className,technology} = project;
                        return(
                            <div className={className} >
                                <img className="projectImg" src={img}/>
                                <div className="name-social-container">
                                    <h1 className="project-name">{name}</h1>
                                    <a className="project-social-btn" href={githubLink} target="_blank"><i class="fab fa-github"></i></a>
                                    <a className="project-social-btn" href={viewLink} target="_blank"><i class="fas fa-globe"></i></a>
                                    <h2 style={{color:'#F63E8C'}}>Technology</h2>
                                    <h4 style={{color:'#fff'}}>{technology}</h4>
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
            </div>
            
        </div>
    );
};

export default Projects;