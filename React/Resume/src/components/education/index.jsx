import './education.css'
import EducationContent from './education-content'


const Education = () => {
    return (
        <div className="container">
            <div className="head">
                <div className="title-education">Education</div>
                <div className="bar"></div>
            </div>
            <div className='display'>
                <EducationContent institution="Ryerson University" date="2010-2013" description="Parallel to the Potsgraduate degree in computer security..."/>
                <EducationContent institution="LA University" date="2013-2016" description="Parallel to the Potsgraduate degree in computer security..."/>
                <EducationContent institution="Harvard University" date="2016-2020" description="Parallel to the Potsgraduate degree in computer security..."/>
            </div>
        </div>
    )
}

export default Education