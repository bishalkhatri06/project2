import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const First = () => {
  return (
    <>
        <h1 className='text-center'>This is first Page</h1>
        <Link to={'/test'}>Test</Link>
    </>
  )
}

export default First

