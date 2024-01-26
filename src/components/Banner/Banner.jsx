import React from 'react'

import './Banner.css'
import logoFirst from './first.png'

const Banner = () => {
  return (
        <ul className='banners'>
            <li>
                <img src={logoFirst} alt="" />
                <br />
                2023
                <br />
                <br />
                Brazil Regional
                Rookie All-Star Award
            </li>
            <li>
                <img src={logoFirst} alt="" />
                <br />
                2023
                <br />
                <br />
                Houston Championship
                Rookie Inspiration Award
                Curie Division
            </li>
            <li>
                <img src={logoFirst} alt="" />
                <br />
                2023
                <br />
                <br />
                Brazil Off-Season
                Engeneering Award
            </li>
        </ul>
    )
}

export default Banner