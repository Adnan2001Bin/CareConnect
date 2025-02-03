import React from 'react'
import { useParams } from 'react-router'

const Doctors = () => {
  const {speciality} = useParams()

  console.log(speciality);
  
  return (
    <div>
      Doctors
    </div>
  )
}

export default Doctors
