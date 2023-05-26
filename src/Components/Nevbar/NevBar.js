import React from 'react'
import "./NevBar.css"
import {Link} from "react-router-dom"

const NevBar = () => {
  return (
    <div className='nevbar'>
      <h1 title='it doesnt work :)'>J.R-Dictionary</h1>
      <div className='links'>
        <Link className='nevLink' to="/">Home</Link>
        <Link className='nevLink' to="/about">About</Link>
        {/* <Link className='nevLink' to="/dictionary">Dictionary</Link>
        <Link className='nevLink' to="/trasnleter">Trasnleter</Link> */}
      </div>
    </div>
  )
}

export default NevBar
