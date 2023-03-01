import Header from "./components/header"
import Banner from "./components/banner"
import AboutMe from "./components/about-me";
import Education from "./components/education";
import Experience from "./components/experience";
import Skills from "./components/skills";

function App() {

  return (
    <div className="App">
      <Header />
      <Banner />
      <AboutMe />
      <Education />
      <Experience />
      <Skills/>
    </div>
  )
}

export default App
