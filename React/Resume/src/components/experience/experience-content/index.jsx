
const ExperienceContent = ({ institution, date, description }) => {
    return (
        <div className="experience-content">
        <div className="head-institution">
            <div className="text-institution">{institution}</div>
            <div className="institution-data">{date}</div>
        </div>
        <div className="description-institution">{description}</div>
    </div>
)
}

export default ExperienceContent