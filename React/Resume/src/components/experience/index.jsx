import ExperienceContent from './experience-content'
import './experience.css'

const Experience = () => {
    return (
        <div className="container">
            <div className="head">
                <div className="title-experience">Experience</div>
                <div className="bar"></div>
            </div>
            <div className="display">
                <ExperienceContent institution="UIUX - Design" date="2010-2013" description="Parallel to the Potsgraduate degree in computer security..."/>
                <ExperienceContent institution="Modal - Frontend" date="2013-2019" description="Parallel to the Potsgraduate degree in computer security..."/>
                <ExperienceContent institution="Arnia - Fullstack" date="2019-" description="Parallel to the Potsgraduate degree in computer security..."/>
            </div>
        </div>
    )
}

export default Experience