import ReactPlayer from 'react-player'
import React from 'react'
import './ytplayer.css'
import { cardClasses } from '@mui/material'

function Ytplayer() {
    const Film = () => {
        return (
            <div className="film__container">
                <div className="film__box">
                    <Reactplay />
                </div>
            </div>
         )
        }
    
        const Reactplay = () => {
          const video = 'https://youtu.be/I10XB1-IIbA'
          return (
              <div className='player-wrapper'>
                  <ReactPlayer
                  className='react-player'
                  url={video}
                  width='100%'
                  height='100%'
                  controls={true}
                  playing
                  loop
                  muted
                  />
              </div>
           )
          }
  return (
      <div className='playerDiv'>
         <Film/>
         {/* <p className='descriptionpara'>Lorem ipsum dolor sit amet.</p> */}
      </div>
       
  )
}

export default Ytplayer
