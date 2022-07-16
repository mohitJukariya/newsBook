import spinner from './spinner.gif'
import React from 'react'

const Loading = () => {
    return (
      <div className='text-center my-5'>
        <img src={spinner} alt="loading" />
      </div>
    )
}

export default Loading