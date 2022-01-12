import {useState, useEffect} from "react"
import Navigation from "./sub_components/Navigation/Navigation"
import MainFooter from "./sub_components/Footer/MainFooter"
import ProjectItem from "./page_components/ProjectsPage/ProjectItem"
import projectAction from "./actions/pages_action"

function TheProjects(){
    const [project__, setProject__] = useState([])

    useEffect(() => {
        async function fetch_project(){
            const res = await projectAction.home_page_requests()
            setProject__(res)
        }
        fetch_project()
    }, [])

    return (
        <div className="ProjectPage">
            {console.log(project__)}
            <Navigation isHome={false}/>
            <main className="main">
            <section className="section projects__" id="projects">
                <div className="projects__container container">
                    {
                        project__ && project__.map(proj => {
                            return(
                                <>
                                    <ProjectItem data={proj} />
                                    <hr className="project__break" />
                                </>
                            )
                        })
                    }
                    
                </div>
            </section>
            </main>
            <MainFooter />
        </div>
    )
}

export default TheProjects