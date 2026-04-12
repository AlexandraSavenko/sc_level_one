import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
     <h2>Sorry, something went wrong</h2> 
<Link to={"/"}>Go back to front page</Link>
    </div>
  )
}

export default NotFound
