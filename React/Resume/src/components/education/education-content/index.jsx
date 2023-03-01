const EducationContent = ({ institution, date, description }) => {
    return (
        <div className="education-content">
            <div className='head-institution'>
                <div className="text-institution">{institution}</div>
                <div className="institution-data">{date}</div>
            </div>
            <div className="description-institution">{description}</div>
        </div>
    )
}

export default EducationContent