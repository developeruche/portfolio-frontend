import { useState, useEffect } from "react"
import styled from "styled-components"
import developer_image from "../../assets/images/user.svg"
import developer_laptop from "../../assets/images/developer_laptop.jpg"
import ProjectListItem from "./ProjectListItem"

function ProjectList() {
    const [currentTheme, setCurrentTheme] = useState("light")
    const [searchValue, setSearchValue] = useState("")

    // Effect for dark mode stability
    useEffect(() => {
        try {
            // setCurrentTheme(localStorage.getItem("du__theme"))
            document.body.classList[currentTheme === 'dark' ? 'add' : 'remove']("dark-theme")
        } catch (error) {
            console.log(`This error occurred while trying to check the previsous theme ${error}`)
        }
    }, [currentTheme])

    return (
        <main>
                    <ProjectListHeader>
                        <div className="projectList__header__head">
                            <div className="projectList__backButton">
                                <button>
                                    <i></i>
                                </button>
                            </div>
                            <div className="projectList__author">
                                <h4>@developeruche</h4>
                            </div>
                            <div className="projectList__avatar">
                                <div className="img__container">
                                    <img src={developer_image} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="projectList__header__body">
                            <div className="projectList__textarea">
                                <h3>
                                    Hi There!
                                </h3>
                                <h4>Welcome to my Projects</h4>
                            </div>
                        </div>
                        <div className="projectList__header__searchBar">
                            <div className="projectList__searchBar__container">
                                <i>Q</i>
                                <input type="text" value={searchValue} onChange={(e)=> {
                                    setSearchValue(e.target.value)
                                }} />
                            </div>
                        </div>
                    </ProjectListHeader>
            <section className="section__x projectList" id="projectList">
                <div className="projectList__container container grid">
                    <ProjectListItem 
                        img = {developer_laptop}
                        git_link = {"www.github.com/developeruche"}
                        download = {'www.developer_uche.web.app/download_link'}
                    />
                    <ProjectListItem 
                        img = {developer_laptop}
                        git_link = {"www.github.com/developeruche"}
                        download = {'www.developer_uche.web.app/download_link'}
                    />
                    <ProjectListItem 
                        img = {developer_laptop}
                        git_link = {"www.github.com/developeruche"}
                        download = {'www.developer_uche.web.app/download_link'}
                    />
                </div>
            </section>
        </main>
    )
}
//  This are the styled components needed for this application 
const ProjectListHeader = styled.div`
    background-image: url(${developer_laptop});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    position: relative;
    height: 35vh;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;

    .projectList__header__head {
        display: flex;
        padding: 15px;
        justify-content: space-between;
    }

    .img__container {
        
        
    }

    .img__container img {
        width: 30px;
        height: 30px;
        border-radius: 999px;
        box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.35);
    }

    .projectList__header__body {
        padding: 10px;
        width: 100%;
    }
`
export default ProjectList
