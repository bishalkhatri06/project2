import React,{useContext} from 'react'
import { GlobalContext } from './GlobalContext'

const ComD = () => {
    const js=useContext(GlobalContext)
  return (
    <>
        {/* <h1>Here we learn {js}</h1> */}
        <h1>Name: {js.name}</h1>
        <h2>Age: {js.age}</h2>
    </>
  )
}

export default ComD