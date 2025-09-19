import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='m-5'>
        <h1 className='text-4xl mb-2 font-bold text-red-700'>Sorry,</h1>
        <h3 className='text-lg font-bold text-red-900 mb-5'>That page cannot be found!</h3>
        <Link className='text-xl font-bold text-blue-800' to={'/'}><u>Back to the homepage...</u></Link>
    </div>
  )
}

export default NotFound
