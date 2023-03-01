import './skills.css'

const Skill = ({ title, value }) => {

    const ball = Array.from({ length: 4 })

    return (
        <div className='skill-row'>
            <div>{title}</div>
            {ball.map((_, index) => (
                <div key={index} className={`circle ${index < value ? 'full' : ''}`}></div>
            ))}
        </div>
    )
}

const Skills = () => {
    return (
        <div className="container">
            <div className="head">
                <div className="title-skills">Skills</div>
                <div className="bar"></div>
            </div>
            <div className="content">
                <div className="skils-column">
                    <Skill title="HTML" value={3} />
                    <Skill title="CSS" value={3} />
                    <Skill title="React" value={1} />
                    <Skill title="Typescript" value={0} />
                </div>
                <div className="skils-column">
                    <Skill title="English" value={4} />
                    <Skill title="French" value={2} />
                    <Skill title="Italian" value={1} />
                </div>
            </div>
        </div>
    )
}

export default Skills