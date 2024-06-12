import React from 'react'
import { useParams } from 'react-router-dom'

function SingleUser() {
    const {id} = useParams()
  return (
    <div>
      <h1>Single User Page {id} </h1>
    </div>
  )
}

export default SingleUser