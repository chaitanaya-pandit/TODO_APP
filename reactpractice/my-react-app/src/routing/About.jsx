import React from 'react'
import { useParams } from 'react-router-dom'
const About = () => {
  const {id}=useParams();
  return (
    <div>About tell me about your self{id}
    </div>
  )
}

export default About