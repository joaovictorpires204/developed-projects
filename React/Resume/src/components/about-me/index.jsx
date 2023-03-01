import "./about-me.css"
import AboutMeText from "./about-me-text"

const AboutMe = () => {
    return (
        <div className="container">
            <div className="head">
                <div className="title-about-me">About me</div>
                <div className="bar"></div>
            </div>
            <AboutMeText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, repellendus quisquam numquam ducimus pariatur a
                quam odio odit rerum iusto quo, animi, doloribus hic voluptatem! A, accusamus? Laudantium impedit dolores sunt consectetur,
                veritatis omnis cumque necessitatibus accusantium? Cum et explicabo sed expedita voluptates ab eum numquam? 
                Eius, natus! Natus optio est dicta asperiores neque nobis delectus, quod ad sunt nisi,minima temporibus voluptatibus distinctio tenetur 
                quas voluptatum nihil cum et eaque enim rerum id." />
        </div>
    )
}

export default AboutMe