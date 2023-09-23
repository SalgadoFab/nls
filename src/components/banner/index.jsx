import React from 'react'
import { Gradient } from './gradient/Gradient'

export const Banner = () => {
  return (
    <section id='banner' >
      <div className='background-container'>
        <div className="wrapper">
          <Gradient/>
        </div>
      </div>
      <div className="content">
        <h1>
          No Limits Solutions
        </h1>
        <p>
        Innovación impulsada por el compromiso.
        </p>
      </div>
    </section>
  )
}
