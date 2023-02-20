import React, { useEffect, useState } from 'react'
import './Home.css'
import Helmet from 'react-helmet'
import Pattern from '../assets/patt1.png'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect';

function Home(props) {
    const navRef = props.navRef
    const [mobileModeOn, setMobileMode] = useState(window.innerWidth < 960)

    useEffect(() => {
        window.addEventListener("resize", () => {
            setMobileMode(window.innerWidth < 960)
        })
    }, [])

    function scrollTo(element) {
        document.getElementById(element).scrollIntoView({ behavior: "smooth" })
    }

    function solidNav() {
        navRef.current.style.backgroundColor = "black"
        navRef.current.style.backgroundImage = "linear-gradient(235deg, rgba(0, 0, 0, 0) 0%, rgba(65, 65, 65, 1) 90%)"
    }

    return (
        <>
            <Helmet>
                <title>Akarsh Tripathi | Full Stack Developer</title>
            </Helmet>
            <div className="base-container">
                <div className="home">
                    <div className="row-0">
                        <div className="title">
                            {/* <img src={Pattern} className="pattern-home" alt=""/> */}
                            {/* <span className="tag-style-text">cout &lt;&lt;</span> */}
                            <h1>
                                <p style={{ fontSize: "20pt" }}>"<span>H</span><span>i</span><span>,</span></p>
                                <Typewriter onInit={(typewriter) => { typewriter.typeString("I'M <span id='a-title'>A</span>KARSH<br/> <span id='fsize-20'>FULL STACK DEVELOPER\"</span>").start() }} />
                            </h1>
                            {/* <span className="tag-style-text">&lt;&lt; endl;</span> */}
                            <p style={{ fontSize: "12.5pt", color: "gray" }}>
                                Research and Tech Writing Enthusiast
                            </p>
                        </div>
                    </div>
                    <div className="waves">
                        <div className="scroller" onClick={() => { scrollTo("row-1"); solidNav() }}>&darr; Scroll &darr;</div>
                        <svg width="100%" height="200px" fill="none" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop stopColor="#f3f4f5" />
                            </linearGradient>
                            <path
                                fill="url(#grad1)"
                                d="M0 67C 273,183 822,-40  1920.00,106 V 359 H 0 V 67Z">
                                <animate repeatCount="indefinite" fill="url(#grad1)" attributeName="d" dur="10s" attributeType="XML" values=" M0 77  C 473,283   822,-40   1920,116       V 359  H 0  V 67  Z;       M0 77  C 473,-40   1222,283   1920,136       V 359  H 0  V 67  Z;       M0 77  C 973,260   1722,-53   1920,120       V 359  H 0  V 67  Z;       M0 77  C 473,283   822,-40   1920,116       V 359  H 0  V 67  Z ">
                                </animate>
                            </path>
                        </svg>
                    </div>
                    <div className="row-1" id="row-1">
                        <div className="row-1-contents">
                            <div className="row-1-header">
                                <div className="row-1-title">
                                    <div style={{ marginLeft: "20px", lineHeight: "1", fontSize: "x-large", marginTop: "40px" }}>
                                        <div className="tag-style-text-2">&lt;h1&gt;</div>
                                        <h1 style={{ marginLeft: "20px" }}>My Profile</h1>
                                        <div className="tag-style-text-2">&lt;/h1&gt;</div>
                                    </div>
                                </div><br />
                                <div style={{ marginLeft: "20px" }}>
                                    <span style={{ fontSize: "larger", fontWeight: 450 }}>
                                        Currently in the pre-final year of my Bachelor of Engineering degree, I'm a Computer Science major on the lookout for<br />
                                        a good job to put my skills to use. I'm also available as a freelancer for individual projects.<br />
                                        After spending a long time on web development projects, I've also spent some time learning about <br />
                                        machine learning. Below are some of my projects in both fields. You may check-out <b><Link to="/work">"My Work"</Link></b> section for all my work.
                                    </span>
                                </div>
                            </div>
                            <div className="project-grid">
                                <div className="project-card" style={{ backgroundColor: "#000" }}>
                                    <div className="project-card-title">WEB-DEVELOPMENT WORK &rarr;</div>
                                </div>
                                <div className="project-card readysetgo">
                                    <a target="_blank" href="https://readysetgo.web.app"><div className="project-card-overlay"></div></a>
                                </div>
                                <div className="project-card mediwell">
                                    <a target="_blank" href="https://mediwell-healthcare.web.app"><div className="project-card-overlay"></div></a>
                                </div>
                                <div className="project-card vednutri">
                                    <a target="_blank" href="https://vednutri.com"><div className="project-card-overlay"></div></a>
                                </div>
                                <div className="project-card" style={{ backgroundColor: "#fff", color: "black" }}>
                                    <div className="project-card-title">Machine Learning Projects &rarr;</div>
                                </div>
                                <div className="project-card face-recog">
                                    <a target="_blank" href="https://github.com/akarshroot/face-recognition"><div className="project-card-overlay"></div></a>
                                </div>
                                <div className="project-card sdv">
                                    <a target="_blank" href="https://github.com/akarshroot/self-drive-vehicles-for-gta5"><div className="project-card-overlay"></div></a>
                                </div>
                                <div className="project-card stocks">
                                    <a target="_blank" href="https://github.com/akarshroot/stock-predictor"><div className="project-card-overlay"></div></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
