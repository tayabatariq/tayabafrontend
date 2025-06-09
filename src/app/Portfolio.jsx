import React from 'react'
import Education from './Education'
import Experience from './Experience'
import  './portfolio.css'

const Portfolio = () => {
  return (
    <div id='portfolio' className='portfoliomainsec'>

        <Education/>
        <Experience/>
    </div>
  )
}

export default Portfolio