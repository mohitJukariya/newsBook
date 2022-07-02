import spinner from './spinner.gif'
import React, { Component } from 'react'

export class Loading extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='text-center'>
        <img src={spinner} alt="loading" />
      </div>
    )
  }
}

export default Loading