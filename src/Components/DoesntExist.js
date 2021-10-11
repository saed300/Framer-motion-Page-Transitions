import React from 'react'
import { useLocation } from 'react-router-dom'

const DoesntExist = () => {

  const location = useLocation();

  return (
    <div>
      <h1>Route {location.pathname} doesnt exist fam</h1>
    </div>
  )
}

export default DoesntExist
