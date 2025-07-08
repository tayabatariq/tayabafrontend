import React from 'react'
import Education from './Education'
import Experience from './Experience'
import  './portfolio.css'

const Portfolio = () => {
  return (
    <div id='portfolio' className='portfoliomainsec'>
        <Experience/>

        <Education/>
    </div>
  )
}

export default Portfolio