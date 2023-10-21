import { useEffect, useState } from 'react'
import './App.scss'
import menu from './assets/images/menu.svg'
import hero from './assets/images/hero.webp'
import html from './assets/images/html.webp'
// import css from './assets/images/css.webp'
import js from './assets/images/javascript.webp'
import react from './assets/images/react.webp'
import vscode from './assets/images/vscode.webp'
import git from './assets/images/github.webp'
import figma from './assets/images/figma.webp'
import chain from './assets/images/chain.png'
import Button from './components/Button'
import SkillCard from './components/SkillCard'
import Tool from './components/Tool'
import Project from './components/Project'
import { socialData, projectData, skillsData, toolsData } from './data.jsx'
import {nanoid }from 'nanoid'


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [counts, setCounts] = useState({
    views: 23,
    visits: 12
  })

  useEffect(() => {
    const handleView = ()=>{
      setIsMobile(window.innerWidth < 780)
    }
    handleView()

    window.addEventListener('resize', handleView);

    return () => {
      window.removeEventListener('resize', handleView);
    }
  }, [isMobile])


  const projects = projectData.map(data => {
    return <Project
      title={data.title}
      subtitle={data.subtitle}
      description={data.description}
      image={data.image}
      link={data.link}
      key= {nanoid()}
    />
  })

  const social = socialData.map(data => {
    return <div className="social" key= {nanoid()}>
      <img src={data.image} alt={data.name} />
      <a href={data.link}><p>{data.name}</p></a>
    </div>
  })
  const socialFoot = socialData.map(data => {
    return <div className="socialFoot" key= {nanoid()}>
      <a href={data.link}>
      <img src={data.image} alt={data.name} />
      </a>
    </div>
  })

  const skills = skillsData.map(data => {
    return <SkillCard key= {nanoid()} title={data.title} desc={data.description} image={data.image} />
  })

  const tools = toolsData.map(data => {
    return <Tool key= {nanoid()} value={data.title} link={data.link} image={chain} />
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

            {/* Desktop Navigation */}
            <ul className={`navDesk ${isMobile && "hide"}`}>
              <li><a href='#home'>Home</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#project'>Project</a></li>
              <li><a href='#contact'>Contact</a></li>
              <li><a href='https://drive.google.com/file/d/1U6s338BgdLVi-tI_0VgIOVaMoJi-7AVE/view?usp=drive_link'><Button value={"Download Resume"} class={'alpha'} /></a></li>
            </ul>

            {/* Mobile Navigation */}
            <img src={menu} alt="" className={`menu ${!isMobile && "hide"}`} onClick={handleNavMenu}/>
            <ul className={`navMobile ${!menuOpen && "hideNav"}`}>
              <li><img src={menu} alt="" className={`menuClose`} onClick={handleNavMenu}/></li>
              <li><a href='#home'>Home</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#project'>Project</a></li>
              <li><a href='#contact'>Contact</a></li>
              <li><a href='https://drive.google.com/file/d/1U6s338BgdLVi-tI_0VgIOVaMoJi-7AVE/view?usp=drive_link'><Button value={"Download Resume"} class={'alpha'} /></a></li>
            </ul>
          </nav>
          <div className="hero">
            <div className="sec1">
              <h1 className="heading">Turning Ideas into Interactive Web Realities</h1>
              <p className="desc">With a passion for aesthetics and functionality, I am your partner in crafting memorable online journeys.</p>

              <div className="cta">
                <a href='mailto:developerlexzee@gmail.com'>
                  <Button value={"Hire Me"} class={"alpha"} />
                </a>
                <Button value={"See my work"} class={"beta"} />
              </div>
            </div>

            <div className="sec2">
              <img src={react} alt="" className="halo h1" />
              <img src={figma} alt="" className="halo h3" />
              <img src={git} alt="" className="halo h2" />
              <img src={html} alt="" className="halo h4" />
              <img src={js} alt="" className="halo h5" />
              <img src={vscode} alt="" className="halo h6" />

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
                Welcome to my corner of the web! I am Abdulquddus Abdulrahman (<i>Lexzee</i>), a passionate Front-End Web Developer with a knack for turning creative visions into interactive web experiences, I have honed my skills in HTML, CSS, JavaScript, and a variety of modern web technologies.
                <br/>
                <br />
                Whether it is a responsive website, a captivating user interface, or a seamless user experience, I thrive on turning concepts into reality. I believe that every line of code should not only work flawlessly but also enhance the overall aesthetic.
                <br/>
                <br />
                Explore my portfolio to see some of my recent projects, and feel free to reach out if you are ready to collaborate on your next web venture. Let's turn your digital dreams into a stunning reality, <b>one line of code at a time</b>.
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
          <div className="contact">
            {socialFoot}
          </div>
          <small>&spades; Designed and Built by <a href='https://github.com/lexzee'>Lexzee</a> &spades;</small>
        </footer>
        <p className="visits">Page views: {counts.views} and Site Visits: {counts.visits} </p>
      </div>
    </>
  )
}

export default App
