import React from 'react'
import "./Home.css"
import Animation from "../Animation"
// import {Link} from "react-router-dom"
import Dictionary from '../Dictionary/Dictionary'
import Dev from '../Dev/Dev'

const Home = () => {
  return (
    <Animation>
    <div className='homeSection'>
        <Dictionary/>
        <Dev/>
    </div>
    </Animation>
  )
}

export default Home
