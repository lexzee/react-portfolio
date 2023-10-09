import { useState } from "react"

const Project = (props) => {
  const [isHover, setIsHover] = useState(true)

  const handleOver = ()=> {
    // setIsHover(!isHover)
  }

  return (
    <div className="project" onMouseEnter={handleOver}>
      <a
        href={props.link}>
        <div className={`front ${!isHover && 'hide'}`}>
          <img
            src={props.image}
            alt="gallery"
          />
        </div>
        <div className={`back ${!isHover && 'hide'}`}>
          <h1>
            {props.title}
          </h1>
          <h2>
            {props.subtitle}
          </h2>
          <p>
            {props.description}
          </p>
        </div>
      </a>
    </div>
  )
}

export default Project