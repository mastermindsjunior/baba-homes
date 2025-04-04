import React from 'react'

const ProjectYear = ({year, img, setCurrentYear}) => {
  const changeYear = () => {
    console.log('Changed', year);
    setCurrentYear(year);
  }
  return (
    <div onClick={changeYear} className='projectYear'>
    <h6>{year}</h6>
        <img src={img} alt="bg" />
    </div>
  )
}

export default ProjectYear