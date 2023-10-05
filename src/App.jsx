import { useState } from 'react'
import './App.scss'
import menu from './assets/images/menu.svg'
import hero from './assets/images/hero.png'
import github from './assets/images/github.png'
import Button from './components/Button'
import SkillCard from './components/SkillCard'
import Tool from './components/Tool'
import Project from './components/Project'
import { socialData, projectData, skillsData, toolsData } from './data.js'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const projects = projectData.map(data => {
    return <Project
      title={data.title}
      subtitle={data.subtitle}
      description={data.description}
      image={data.image}
      link={data.link}
    />
  })

  const social = socialData.map(data => {
    return <div className="social">
      <img src={data.image} alt={data.name} />
      <a href={data.link}><p>{data.name}</p></a>
    </div>
  })

  const skills = skillsData.map(data => {
    return <SkillCard title={data.title} desc={data.description} image={data.image} />
  })

  const tools = toolsData.map(data => {
    return <Tool value={data.title} link={data.link} image={data.image} />
  })

  const handleNavMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <div className="App" id='home'>
        <header className="head">
          <nav className="navigation">
            <p className="logo">Lexzee</p>
            <img src={menu} alt="" className={`menu ${menuOpen && "hideNav"}`}onClick={handleNavMenu}/>
            <ul className={`navMobile ${!menuOpen && "hideNav"}`}>
              <li><img src={menu} alt="" className={`menuClose`} onClick={handleNavMenu}/></li>
              <li><a href='#home'>Home</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#project'>Project</a></li>
              <li><a href='#contact'>Contact</a></li>
              <li><Button value={"Download Resume"} class={'alpha'} /></li>
            </ul>
          </nav>
          <div className="hero">
            <div className="sec1">
              <h1 className="heading">Some Catchy Tag Line</h1>
              <p className="desc">Lorem ipsum dolor sit amet consecutor. hiihefihioivsduvisd uefuieugfwefowefoiuewfwef gdty6 td tstr tsyrs srsys sysjts  tdd ud ud uyd tdyu 6e6e 6e t e5shjdhd  ,loiot ofi if uf u u</p>

              <div className="cta">
                <Button value={"Hire Me"} class={"alpha"} />
                <Button value={"See my work"} class={"beta"} />
              </div>
            </div>

            <div className="sec2">
              <img src={hero} alt="" className="heroImg" />
            </div>
          </div>
        </header>
        <main className="main">
          <div className="about" id='about'>
            <div className="sec1">
              <h2 className="aboutHead">
                A Little about me
              </h2>
              <p className="aboutDet">
                Lorem ipsum dolor sit amet consecutor. hiihefihioivsduvisd
                uefuieugfwefowefoiuewfwef gdty6 td tstr tsyrs srsys sysjts  tdd ud ud uyd tdyu  6e6e 6e t e5shjdhd  ,loiot ofi if uf u u
                <br/>
                <br />
                Lorem ipsum dolor sit amet consecutor. hiihefihioivsduvisd
                uefuieugfwefowefoiuewfwef gdty6 td tstr tsyrs srsys sysjts  tdd ud ud uyd tdyu  6e6e 6e t e5shjdhd  ,loiot ofi if uf u u
              </p>
              <h2 className="contactHead" id='contact'>
              Contact me on Social Media
              </h2>
              <section className="socials">
                {social}
              </section>
            </div>
            <div className="sec2">
              {skills}
              <h2>Some of the tools I work with</h2>
              <section className="tools">
                {tools}
              </section>
            </div>
          </div>
          <div className="projects" id='project'>
            <p>Some of My Projects</p>
            <div className="projectsTiles">
              {projects}
            </div>
          </div>
        </main>
        <footer className="footer">
          <h2>Get in Touch</h2>
          <p>lorem ipsum dolor sit amet consecuter shfidfb  ksjbfd df   fdfd flih dfju dfj d ffd dfjkj dfj</p>
          <Button value={"Let's Get Started"} class={"beta"} />
        </footer>
      </div>
    </>
  )
}

export default App
