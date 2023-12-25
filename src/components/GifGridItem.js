import React from 'react'

export const GifGridItem = ({title,imagen}) => {

  

    
  return (
    <div className='card animate__animated animate__headShake'>
       <img src={imagen} alt={title} />
       <p>{title}</p>
    </div>
  )
}


