import {useState, useEffect } from 'react'
import Link from "next/link"


function Navigation({isHome=true}) {
    const [screenMode, setScreenMode] = useState(false)

    // const [activeHome, setActiveHome] = useState(true)
    // const [activeAbout, setActiveAbout] = useState(false)
    // const [activeSkills, setActiveSkills] = useState(false)
    // const [activeServices, setActiveServices] = useState(false)
    // const [activePortfolio, setActivePortfolio] = useState(false)
    // const [activeContact, setActiveContact] = useState(false)

    // Here come some fuctionality

    // This block of code would remove the navigation when an of navlink is clicked
    function linkAction() {
        setScreenMode(false)
    }

    
    /*==================== CHANGE BACKGROUND HEADER ====================*/ 
    try {
        function scrollHeader(){
            const nav = document.getElementById('header')
            if(nav){
                if(this.scrollY > 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
            }
        }
    
        window.addEventListener('scroll', scrollHeader)
    } catch (err) {
        
    }


    // Implementing Dark and light theme
    const [currentTheme, setCurrentTheme] = useState("dark")


    const goToggleTheme = () => {
        // Getting the previous screen mode which is saved in the local storage
        // NAMING: du__theme === "light" || "dark"
        console.log(currentTheme)
        if(currentTheme === "light" || null) {
            setCurrentTheme("dark")
            localStorage.setItem("du__theme", "dark")
            document.body.classList[currentTheme === 'dark' ? 'add' : 'remove']("dark-theme")
        } else {
            setCurrentTheme ("light")
            localStorage.setItem("du__theme", "light")
            document.body.classList[currentTheme === 'dark' ? 'add' : 'remove']("dark-theme")
        }
    }

    useEffect(() => {
        try {
            if(localStorage.getItem("du__theme")) {
                setCurrentTheme(localStorage.getItem("du__theme"))
                document.body.classList[currentTheme === 'dark' ? 'add' : 'remove']("dark-theme")
            } else {
                localStorage.setItem("du__theme", "dark")   
                setCurrentTheme("dark")
                document.body.classList[currentTheme === 'dark' ? 'add' : 'remove']("dark-theme")
                console.log("it happened here")
            }
        } catch (error) {
            // This means this is there first time trying out the theme changing features
            console.log("an error occured while trying to change the application theme")
        }
    }, [currentTheme])



    return (
        <header className="header" id="header">
            <nav className="nav container" id='ddd'>
                <a href="#" className="nav__logo">
                    @developeruche
                </a>
                    <div className={`nav__menu ${screenMode ? "show-menu" : ""}`} id="nav-menu">
                        <ul className="nav__list grid">
                            <li className="nav__item">
                                {
                                    isHome ? (
                                    <a href="#home" onCLick={linkAction} className="nav__link active-link">
                                        <i className="uil uil-estate nav__icon"></i> Home
                                    </a>
                                    ) : (
                                        <Link href="/">
                                        <span href="#home" onCLick={linkAction} className="nav__link active-link cu">
                                        <i className="uil uil-estate nav__icon"></i> Home
                                        </span>
                                        </Link>
                                    )
                                }
                            </li>
                            <li className="nav__item">
                                {
                                    isHome ? (
                                        <a href="#about" onCLick={linkAction} className="nav__link">
                                            <i className="uil uil-user nav__icon"></i> About
                                        </a>
                                    ) : (
                                        <Link href="/">
                                            <span href="#about" onCLick={linkAction} className="nav__link cu">
                                            <i className="uil uil-user nav__icon"></i> About
                                            </span>
                                        </Link>
                                    )
                                }
                            </li>
                            <li className="nav__item">
                                {
                                    isHome ? (
                                        <a href="#skills" onCLick={linkAction} className="nav__link">
                                            <i className="uil uil-file-alt nav__icon"></i> Skills
                                        </a>
                                    ) : (
                                        <Link href="/">
                                            <span onCLick={linkAction} className="nav__link cu">
                                            <i className="uil uil-file-alt nav__icon"></i> Skills
                                            </span>
                                        </Link>
                                    )
                                }
                            </li>
                            <li className="nav__item">
                                {
                                    isHome ? (
                                        <a href="#services" onCLick={linkAction} className="nav__link">
                                            <i className="uil uil-briefcase-alt nav__icon"></i> Services
                                        </a>
                                    ) : (
                                        <Link href="/">                                        
                                            <span onCLick={linkAction} className="nav__link cu">
                                            <i className="uil uil-briefcase-alt nav__icon"></i> Services
                                            </span>
                                        </Link>
                                    )
                                }
                            </li>

                            <li className="nav__item">
                                {
                                    isHome ? (
                                    <Link href="/projects">
                                        <span href="#portfolio" onCLick={linkAction} className="nav__link cu">
                                            <i className="uil uil-scenery nav__icon"></i> Portfolio
                                        </span>
                                    </Link>
                                    ) : (
                                        <Link href="/">
                                        <span href="#portfolio" onCLick={linkAction} className="nav__link cu">
                                        <i className="uil uil-scenery nav__icon"></i> Portfolio
                                        </span>
                                        </Link>
                                    )
                                }
                            </li>
                            <li className="nav__item">
                                {
                                    isHome ? (
                                        <a href="#contactme" onCLick={linkAction} className="nav__link">
                                            <i className="uil uil-message nav__icon"></i> Contact
                                        </a>
                                    ) : (
                                        <Link href="/">
                                            <span onCLick={linkAction} className="nav__link cu">
                                            <i className="uil uil-message nav__icon"></i> Contact
                                            </span>
                                        </Link>
                                    )
                                }
                            </li>
                            <i className="uil uil-times nav__close" id="nav-close"></i>
                        </ul>
                        <i className="uil uil-times nav__close" id="nav-close" onClick={() => {
                            setScreenMode(false)
                        }}></i>
                    </div>
                    <div className="nav__btns">
                        {console.log(currentTheme === null)}
                        <i className={`uil ${ currentTheme === "light" || currentTheme === null  ? "uil-moon" : "uil-sun"} change-theme`} id="theme-button" onClick={() => {
                            goToggleTheme()
                        }}></i>
                        
                        
                        <div className="nav__toggle" id="nav-toggle" onClick={() => {
                            setScreenMode(true)
                        }}>
                            <i className="uil uil-apps"></i>
                        </div>
                    </div> 
            </nav>
        </header>
    )
}

export default Navigation
