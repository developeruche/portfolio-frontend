function ProjectListItem({img, git_link, download_link}) {
    return (
        <div className="projectListItem">
            <img className="projectListItem__img" src={img} alt="" />
            <div className="projectListItem__links">
                <a href={git_link} className="github__link">
                    <i></i>
                </a>
                <a href={download_link} className="download__link">
                    <i></i>
                </a>
            </div>
        </div>
    )
}

export default ProjectListItem
