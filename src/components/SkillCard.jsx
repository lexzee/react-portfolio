const SkillCard = (props) => {
  return (
    <div className='skill'>
      <img src={props.image} alt="" />
      <p>
        {props.title}
        <span>
          {props.desc}
        </span>
      </p>
    </div>
  )
}

export default SkillCard