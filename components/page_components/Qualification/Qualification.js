import {useState, useEffect} from 'react'


function Qualification() {

    const [showWork, setShowWork] = useState(true)



    
    return (
        <div>
            <section className="qualification section">
                <h2 className="section__title">Qualification</h2>
                <span className="section__subtitle">My personal journey</span>

                <div className="qualification__container container">
                    <div className="qualification__tabs">
                        <div className="qualification__button button--flex quailification__active" data-target="#education" onClick={
                            () => {
                                setShowWork(true)
                            }
                        }>
                            <i className="uil uil-graduation-cap qualification__icon"></i>
                            Education
                        </div>
                        <div className="qualification__button button--flex" data-target="#work" onClick={
                            () => {
                                setShowWork(false)
                            }
                        }>
                            <i className="uil uil-briefcase-alt qualification__icon"></i>
                            Work
                        </div>
                    </div>

                    <div className="qualification__sections">
                        <div className={`qualification__content ${showWork ? "qualification__active" : ""}`} data-content id="education">
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Computer Engineer</h3>
                                    <span className="qualification__subtitle">Benin - University</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calender-alt"></i>
                                        2019 - 2024
                                    </div>
                                </div>
    
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
    
                            <div className="qualification__data">
                                <div></div>
    
    
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
    
                                <div>
                                    <h3 className="qualification__title">Web Development</h3>
                                    <span className="qualification__subtitle">Udemy - Online</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calender-alt"></i>
                                        2017 - 2019
                                    </div>
                                </div>
                            </div>
    
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Graphic Design</h3>
                                    <span className="qualification__subtitle">Lagos - Institute</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calender-alt"></i>
                                        2016 - 2018
                                    </div>
                                </div>
    
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
    
                            <div className="qualification__data">
                                <div></div>
    
                                <div>
                                    <span className="qualification__rounder"></span>
                                    {/* <span className="qualification__line"></span> */}
                                </div>
    
                                <div>
                                    <h3 className="qualification__title">Software Engineering</h3>
                                    <span className="qualification__subtitle">Udemy - Online</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calender-alt"></i>
                                        2019 - 2020
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`qualification__content ${showWork === false ? "qualification__active" : ""}`} data-content id="work">
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Frontend Developer</h3>
                                    <span className="qualification__subtitle">Upwork - Online</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calender-alt"></i>
                                        2019 - 2021
                                    </div>
                                </div>
    
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
    
                            <div className="qualification__data">
                                <div></div>
    
    
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
    
                                <div>
                                    <h3 className="qualification__title">Backend Developer</h3>
                                    <span className="qualification__subtitle">Upwork - Online</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calender-alt"></i>
                                        2019 - 2020
                                    </div>
                                </div>
                            </div>
    
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Software Development</h3>
                                    <span className="qualification__subtitle">Freelancer - Online</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calender-alt"></i>
                                        2019 - 2020
                                    </div>
                                </div>
    
                                <div>
                                    <span className="qualification__rounder"></span>
                                    {/* <span className="qualification__line"></span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Qualification
