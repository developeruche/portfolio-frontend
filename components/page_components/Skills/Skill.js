import { useState } from "react"


function Skill() {
    const [skillOne, setSkillOne] = useState(true) //frontend
    const [skillTwo, setSkillTwo] = useState(false) //backend
    const [skillThree, setSkillThree] = useState(false) //graphics
    const [skillFour, setSkillFour] = useState(false) // software development
    const [skillFive, setSkillFive] = useState(false) // mobile application developement
    const [skillSix, setSkillSix] = useState(false) //AI



    return (
        <div>
            <section className="skills section" id="skills">
                <h2 className="section__title">Skills</h2>
                <span className="section__subtitle">My technical level</span>

                <div className="skills__container container grid">
                    <div>
                        <div className={`skills__content ${skillOne ? "skills__open" : "skills__close"}`} onClick={() => {
                            if(skillOne){
                                setSkillOne(false)
                            }else {
                                setSkillOne(true)
                            }
                            
                            setSkillTwo(false)
                            setSkillThree(false)
                            setSkillFour(false)
                            setSkillFive(false)
                            setSkillSix(false)
                        }}>
                            <div className="skills__header">
                                <i className="uil uil-brackets-curly skills__icon"></i>

                                <div>
                                    <h1 className="skills__titles">Frontend Developer</h1>
                                    <span className="skills__subtitle">More than 3 years</span>
                                </div>

                                <i className="uil uil-angle-down skills__arrow skills__icon"></i>
                            </div>

                            <div className="skills__list grid">
                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">HTML</h3>
                                        <span className="skills__number">90%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__html"></span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">CSS</h3>
                                        <span className="skills__number">70%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__css"></span>
                                    </div>
                                </div>
                                                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">JavaScript</h3>
                                        <span className="skill__number">90%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__js"></span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">React</h3>
                                        <span className="skill__number">85%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__react"></span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">SCSS</h3>
                                        <span className="skill__number">70%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__scss"></span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">Python</h3>
                                        <span className="skill__number">90%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__python"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                       <div className={`skills__content ${skillTwo ? "skills__open" : "skills__close"}`} onClick={() => {
                            if(skillTwo){
                                setSkillTwo(false)
                            }else {
                                setSkillTwo(true)
                            }
                            
                            setSkillOne(false)
                            setSkillThree(false)
                            setSkillFour(false)
                            setSkillFive(false)
                            setSkillSix(false)
                        }}>
                        <div className="skills__header">
                            <i className="uil uil-server-connection skills__icon"></i>
                            <div>
                                <h1 className="skills__titles">Backend Developer</h1>
                                <span className="skills__subtitle">More than 2 years</span>
                            </div>

                            <i className="uil uil-angle-down skills__arrow skills__icon"></i>
                        </div>


                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">MERN Stack</h3>
                                    <span className="skill__number">85%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__mern"></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Node JS</h3>
                                    <span className="skill__number">85%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__node"></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Firebase</h3>
                                    <span className="skill__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__firebase"></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Django</h3>
                                    <span className="skill__number">85%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__python"></span>
                                </div>
                            </div>
                        </div>
                    
                    
                    </div>                    
                </div>

                <div>
                       <div className={`skills__content ${skillThree ? "skills__open" : "skills__close"}`} onClick={() => {
                            if(skillThree){
                                setSkillThree(false)
                            }else {
                                setSkillThree(true)
                            }
                            
                            setSkillTwo(false)
                            setSkillFour(false)
                            setSkillFive(false)
                            setSkillOne(false)
                            setSkillSix(false)
                        }}>
                        <div className="skills__header">
                            <i class="uil uil-brush-alt skills__icon"></i>
                            <div>
                                <h1 className="skills__titles">Graphics Designer</h1>
                                <span className="skills__subtitle">More than 4 years</span>
                            </div>
                            
                            <i className="uil uil-angle-down skills__arrow skills__icon"></i>
                        </div>


                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Figma</h3>
                                    <span className="skill__number">85%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__figma"></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Adobe I</h3>
                                    <span className="skill__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__ai"></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">CorelDraw</h3>
                                    <span className="skill__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__draw"></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Adobe XD</h3>
                                    <span className="skill__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__xd"></span>
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div className={`skills__content ${skillFour ? "skills__open" : "skills__close"}`} onClick={() => {
                            if(skillFour){
                                setSkillFour(false)
                            }else {
                                setSkillFour(true)
                            }
                            
                            setSkillTwo(false)
                            setSkillThree(false)
                            setSkillFive(false)
                            setSkillOne(false)
                            setSkillSix(false)
                        }}>
                        <div className="skills__header">
                            <i class="uil uil-wrench skills__icon"></i>
                            <div>
                                <h1 className="skills__titles">Software Engineering</h1>
                                <span className="skills__subtitle">More than 3 years</span>
                            </div>
                            
                            <i className="uil uil-angle-down skills__arrow skills__icon"></i>
                        </div>


                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Python</h3>
                                    <span className="skill__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__python"></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">JavaScript</h3>
                                    <span className="skill__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__js"></span>
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div className={`skills__content ${skillFive ? "skills__open" : "skills__close"}`} onClick={() => {
                            if(skillFive){
                                setSkillFive(false)
                            }else {
                                setSkillFive(true)
                            }
                            
                            setSkillTwo(false)
                            setSkillFour(false)
                            setSkillThree(false)
                            setSkillOne(false)
                            setSkillSix(false)
                        }}>
                        <div className="skills__header">
                            <i class="uil uil-mobile-android skills__icon"></i>
                            <div>
                                <h1 className="skills__titles">Mobile Development</h1>
                                <span className="skills__subtitle">More than 1 years</span>
                            </div>
                            
                            <i className="uil uil-angle-down skills__arrow skills__icon"></i>
                        </div>


                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">React</h3>
                                    <span className="skill__number">85%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__figma"></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">React Native</h3>
                                    <span className="skill__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__rn"></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Flutter</h3>
                                    <span className="skill__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__flutter"></span>
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div className={`skills__content ${skillSix ? "skills__open" : "skills__close"}`} onClick={() => {
                            if(skillSix){
                                setSkillSix(false)
                            }else {
                                setSkillSix(true)
                            }
                            
                            setSkillTwo(false)
                            setSkillFour(false)
                            setSkillFive(false)
                            setSkillOne(false)
                            setSkillThree(false)
                        }}>
                        <div className="skills__header">
                            <i class="uil uil-robot skills__icon"></i>
                            <div>
                                <h1 className="skills__titles">Artificial Intelligence</h1>
                                <span className="skills__subtitle">More than 3 years</span>
                            </div>
                            
                            <i className="uil uil-angle-down skills__arrow skills__icon"></i>
                        </div>


                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Machine Learning</h3>
                                    <span className="skill__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__python"></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Deep Learning</h3>
                                    <span className="skill__number">85%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__figma"></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Neural Network</h3>
                                    <span className="skill__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__rn"></span>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
                </div>
            </section>
        </div>
    )
}

export default Skill
