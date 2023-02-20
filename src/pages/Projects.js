import React from 'react'
import { Helmet } from 'react-helmet'
import './Projects.css'

function Projects() {
    return (
        <>
        <Helmet>
            <title>My Work | Akarsh Tripathi</title>
        </Helmet>
            <div className="base-container">
                <div className="projects">
                    <div className="project-grid-full">
                        <div className="project-card-full readysetgo">
                            <a target="_blank" href="https://readysetgo.web.app"><div className="project-card-overlay"></div></a>
                        </div>
                        <div className="project-card-full face-recog">
                            <a target="_blank" href="https://github.com/akarshroot/face-recognition"><div className="project-card-overlay"></div></a>
                        </div>
                        <div className="project-card-full sdv">
                            <a target="_blank" href="https://github.com/akarshroot/self-drive-vehicles-for-gta5"><div className="project-card-overlay"></div></a>
                        </div>
                        <div className="project-card-full vednutri">
                            <a target="_blank" href="https://vednutri.com"><div className="project-card-overlay"></div></a>
                        </div>
                        <div className="project-card-full stocks">
                            <a target="_blank" href="https://github.com/akarshroot/stock-predictor"><div className="project-card-overlay"></div></a>
                        </div>
                        <div className="project-card-full mediwell">
                            <a target="_blank" href="https://mediwell-healthcare.web.app"><div className="project-card-overlay"></div></a>
                        </div>
                        <div className="project-card-full organizerinator">
                            <a target="_blank" href="https://organizerinator.onrender.com/login"><div className="project-card-overlay"></div></a>
                        </div>
                        <div className="project-card-full nerdymonk">
                            <a target="_blank" href="https://nerdymonk.com"><div className="project-card-overlay"></div></a>
                        </div>
                        <div className="project-card-full leetcode">
                            <a target="_blank" href="https://github.com/akarshroot/leetcode-problems"><div className="project-card-overlay"></div></a>
                        </div>
                        <div className="project-card-full cursorcrew">
                            <a target="_blank" href="https://cursorcrew.com"><div className="project-card-overlay"></div></a>
                        </div>
                        <div className="project-card-full manageone">
                            <a target="_blank" href="https://github.com/akarshroot/manage-one"><div className="project-card-overlay"></div></a>
                        </div>
                        <div className="project-card-full research">
                            <a target="_blank" href="https://www.mdpi.com/1424-8220/22/6/2422"><div className="project-card-overlay"></div></a>
                        </div>
                        <div className="project-card-full tech-blogs">
                            <a target="_blank" href="https://nerdymonk.com/author/akarshtripathi/"><div className="project-card-overlay"></div></a>
                        </div>
                        <div className="project-card-full stackoverflow">
                            <a target="_blank" href="https://stackoverflow.com/users/11848375/akarsh-tripathi#"><div className="project-card-overlay"></div></a>
                        </div>
                        <div className="project-card-full nerdymonk-ide">
                            <a target="_blank" href="https://ide.nerdymonk.com"><div className="project-card-overlay"></div></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects