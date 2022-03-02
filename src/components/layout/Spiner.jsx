import React from 'react'
import spiner from './assets/spiner.gif'

function Spiner() {
  return (
    <div className='w-100 mt-20'>
        <img src={spiner} alt="Loading......." width={180} className='text-center mx-auto' />
    </div>
  )
}

export default Spiner