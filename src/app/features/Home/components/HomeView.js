import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = ({loadTime, status, time}) => (
  <div>
    <h4>Welcome!</h4>
    <img alt='This is a sample, because Redux!' className='duck' src={DuckImage} />
    <button onClick={loadTime} >Load time</button>
    {status === 'PENDING' ? 'PENDING' : time}
  </div>
)

export default HomeView
