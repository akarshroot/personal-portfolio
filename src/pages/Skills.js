import React, { useEffect, useState } from 'react'
import './Skills.css'
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Helmet from 'react-helmet'

function Skills() {
    const skills = ["HTML5", "CSS3", "JavaScript", "Java", "Node.js", "React.js", "Express.js", "MongoDB", "Oracle 21c", "C++", "Salesforce", "Linux", "Python", "Firebase", "AWS", "HEROKU", "Google Cloud PLatform"]
    return (
        <>
            <Helmet>
                <title>Skills | Akarsh Tripathi | Full Stack Developer</title>
            </Helmet>
            <div className="base-container">
                <div className="skills">
                    <div className="row-0-skills">
                        <div className="row-0-contents-skills">
                            <div className="col1">
                                <div className="skills-header">
                                    <span className="tag-style-text-2-white">&lt;div&gt;</span>
                                    <div style={{ marginLeft: "20px", fontFamily: "Lemon Milk" }}>
                                        <span class="tag-style-text-2-white">&lt;h1&gt;</span>
                                        <h1>
                                            <Typewriter onInit={(typewriter) => { typewriter.typeString("SKILLS & EXPERIENCE").start() }} />
                                        </h1>
                                        <span className="tag-style-text-2-white">&lt;/h1&gt;</span>
                                    </div>
                                    <span className="tag-style-text-2-white">&lt;/div&gt;</span><br />
                                    <span className="tag-style-text-2-white">&lt;p&gt;</span>
                                    <div style={{ marginLeft: "20px" }}>
                                        As I got into web development a couple years back, I've done a lot of personal projects <br />
                                        as well as some remote work for businesses. In this short time I've worked lots of<br />
                                        hours and aquired the skills which I have portrayed through my projects and works on the <br />
                                        projects page.<br />
                                        I create responsive websites that are fast, easy to use, and built with best practices. <br />
                                        I also have personal experience in building full stack web apps with elegant<br />
                                        features and animations and deployment over cloud platforms.<br />
                                        Below mentioned are my social media handles for more info: <br />
                                        <ul>
                                            <li style={{ listStyle: "none", display: "flex", marginTop: "10px", marginLeft: "-20px" }}><a style={{ textDecoration: "none", color: "tomato" }} target="_blank" href="https://www.linkedin.com/in/akarsh-tripathi-45563819b/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>&nbsp;&nbsp;LinkedIn</a></li>
                                            <li style={{ listStyle: "none", display: "flex", marginTop: "10px", marginLeft: "-20px" }}><a style={{ textDecoration: "none", color: "tomato" }} target="_blank" href="https://www.instagram.com/akarsh.tripathi_"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z" /></svg>&nbsp;&nbsp;Instagram</a></li>
                                        </ul>
                                        <p>
                                            Or, reach out to me at <a style={{ textDecoration: "none", color: "tomato" }} target="_blank" href="https://www.fiverr.com/akarshtripathi_">Fiverr</a>
                                        </p>
                                        {/* Or you may <Link style={{ color: "tomato", textDecoration: "none" }} to="/contact">contact me</Link>. */}
                                    </div>
                                    <span className="tag-style-text-2-white">&lt;/p&gt;</span>
                                </div>
                            </div>
                            <div className="col2 align-center">
                                <div className="tags-container">
                                    {
                                        skills.map((skill) => {
                                            return (
                                                <div className="tag">
                                                    <button class="button-30" role="button">{skill}</button>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
