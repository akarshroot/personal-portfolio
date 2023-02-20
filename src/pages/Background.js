import React from 'react'
import { Helmet } from 'react-helmet'
import './Background.css'
import Typewriter from 'typewriter-effect';

function Background() {
    return (
        <>
            <Helmet>
                <title>Background | Akarsh Tripathi | Full Stack Developer</title>
            </Helmet>
            <div className="base-container">
                <div className="background">
                    <div className="row-0">
                        <div className="row-0-contents-background">
                            <div className="col1">
                                <div className="bg-content">
                                    <div className="background-header">
                                        <span className="tag-style-text-2-white">&lt;div&gt;</span>
                                        <div style={{ marginLeft: "20px", fontFamily: "Lemon Milk" }}>
                                            <span class="tag-style-text-2-white">&lt;h1&gt;</span>
                                            <h1>
                                                <Typewriter onInit={(typewriter) => { typewriter.typeString("BACKGROUND").start() }} />
                                            </h1>
                                            <span className="tag-style-text-2-white">&lt;/h1&gt;</span>
                                        </div>
                                        <span className="tag-style-text-2-white">&lt;/div&gt;</span><br />
                                    </div>
                                    <div className="background-body">
                                        <span className="tag-style-text-2-white">&lt;p&gt;</span>
                                        <p>
                                            Currently enrolled in 3rd year of the 4 year Bachelor's degree, I
                                            am an aspiring software engineer and a quick learner with
                                            good problem solving, excellent troubleshooting skills and a
                                            passion for innovation which enables me to constantly acquire
                                            new skills. My specialization is in Full-Stack Development and
                                            I contantly try to learn about new technologies in the field of development.
                                        </p>
                                        <p>
                                            I place the utmost value on learning and frequently draw lessons from my experiences.
                                            Life is nothing but a series of experiences, in my perspective. I've always had a tendency to want to understand how things operate, and I think that this propensity is what has led me to where I am today.
                                        </p>
                                        <p>
                                            Aside from my extensive technological background, I also enjoy watching movies and firmly think that creativity emerges from the intake of content. I'm also interested in finance and how the economy functions as a whole.
                                        </p>
                                        <span className="tag-style-text-2-white">&lt;/p&gt;</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Background