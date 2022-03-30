import Manager from "../../sub_components/Video/Manager"


function ProjectItem({data}){


    return (
        <div className="projectItem grid">
            <div className="projectItem__sectionOne">
                <Manager 
                    video_url={data.video}
                    project_title={data.title}
                    explore_url={data.demo_url}
                />
                <div className="projectItem__shortdocs">
                    <p>
                        {data?.short_description}
                    </p>
                </div>
            </div>
            
            <div className="projectItem__sectionTwo">
                <div className="utils">
                    <div className="utils__category">
                        {
                            data.tech.map(cat_ => {
                                return(
                                    <p>{cat_.name}</p>
                                )
                            })
                        }
                    </div>


                    <div className="utils__footer">
                        <a href={data.demo_url}>
                            Explore
                        </a>
                        <a href={data.github}>
                            Github
                        </a>
                    </div>
                </div>
                <div className="projectItem__imageContainer">
                    <img src={data.main_image}/> 
                </div>
            </div>
        </div>
    )
}

export default ProjectItem