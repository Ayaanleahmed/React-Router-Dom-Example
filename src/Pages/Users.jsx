import React from 'react'
import { Outlet } from 'react-router-dom'

function users() {
  return (
    <div>
      <h1>USERS PAGE</h1>
      <Outlet/>
    </div>
  )
}

export default users