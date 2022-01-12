import React from 'react'



function AboutSection() {
    return (
        <div>
            <section className="about section" id="about">
                <h2 className="section__title">About Me</h2>
                <span className="section__subtitle">My Introduction</span>

                <div className="about__container container grid">
                    <img src='/headshot.jpg' alt="" className="about__img" />

                    <div className="about__data">
                        <p className="about__description">
                            Software Engineer, currently focus on mobile and web technology with extensive knowledge and years of experience, delivering quality and optimized applications.
                        </p>
                        <div className="about__info">
                            <div>
                                <span className="about__info-title">03+</span>
                                <span className="about__info-name">Years <br /> experience</span>
                            </div>
                            <div>
                                <span className="about__info-title">25+</span>
                                <span className="about__info-name">Completed <br /> project <br /> experience</span>
                            </div>
                            <div>
                                <span className="about__info-title">02+</span>
                                <span className="about__info-name">Companies <br /> worked <br /> experience</span>
                            </div>
                        </div>
                        <div className="about__buttons">
                            <a download href='/developeruche_cv.pdf' className="button button--flex">
                                Download CV<i className="uil uil-download-alt button__icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
        
            </section>
        </div>
    )
}

export default AboutSection
